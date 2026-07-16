import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Save, X, FileText, Download, Trash2, FolderOpen } from 'lucide-react';
import { API_BASE_URL } from '../config';

const AdminDownloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', category: '', fileUrl: '' });
  const [editPdfFile, setEditPdfFile] = useState(null);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({ title: '', category: '', fileUrl: '' });
  const [addPdfFile, setAddPdfFile] = useState(null);
  const [isNewCategory, setIsNewCategory] = useState(false);

  const [deletingDownload, setDeletingDownload] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const API_BASE = `${API_BASE_URL}/api`;

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const res = await axios.get(`${API_BASE}/downloads`);
      setDownloads(res.data);
    } catch (error) {
      console.error('Failed to fetch downloads', error);
    }
  };

  const handleEditClick = (download) => {
    setEditingId(download.id);
    setEditForm({
      title: download.title,
      category: download.category,
      fileUrl: download.fileUrl
    });
    setEditPdfFile(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditPdfFile(null);
  };

  const handleSaveEdit = async (id) => {
    let finalFileUrl = editForm.fileUrl;

    if (editPdfFile) {
      if (editPdfFile.size > 10 * 1024 * 1024) {
        alert("File size must be 10MB or less");
        return;
      }
      const formData = new FormData();
      formData.append('pdf', editPdfFile); // Reuse pdf upload logic in server
      
      try {
        const uploadRes = await axios.post(`${API_BASE}/upload`, formData);
        finalFileUrl = uploadRes.data.pdfUrl; // Server returns pdfUrl for now
      } catch (error) {
        console.error('Failed to upload File', error);
        alert('Failed to upload File');
        return;
      }
    }

    const updatedDownloads = downloads.map(d => 
      d.id === id ? { ...d, ...editForm, fileUrl: finalFileUrl } : d
    );

    try {
      await axios.post(`${API_BASE}/downloads`, updatedDownloads);
      setDownloads(updatedDownloads);
      setEditingId(null);
      setEditPdfFile(null);
    } catch (error) {
      console.error('Failed to save downloads', error);
      alert('Failed to save changes');
    }
  };

  const handleDeleteDownload = async (id) => {
    try {
      await axios.delete(`${API_BASE}/downloads/${id}`);
      setDownloads(downloads.filter(d => d.id !== id));
      setDeletingDownload(null);
      setDeleteConfirmText('');
    } catch (error) {
      console.error('Failed to delete download', error);
      alert('Failed to delete download');
    }
  };

  const handleAddDownload = async (e) => {
    e.preventDefault();
    
    if (!addPdfFile && !addForm.fileUrl) {
       alert("Please upload a file");
       return;
    }

    let finalFileUrl = addForm.fileUrl;

    if (addPdfFile) {
      if (addPdfFile.size > 10 * 1024 * 1024) {
        alert("File size must be 10MB or less");
        return;
      }
      const formData = new FormData();
      formData.append('pdf', addPdfFile);
      
      try {
        const uploadRes = await axios.post(`${API_BASE}/upload`, formData);
        finalFileUrl = uploadRes.data.pdfUrl;
      } catch (error) {
        console.error('Failed to upload File', error);
        alert('Failed to upload File');
        return;
      }
    }

    const newId = `download-${Date.now()}`;
    const newDownload = {
      id: newId,
      title: addForm.title,
      category: addForm.category,
      fileUrl: finalFileUrl,
      createdAt: new Date().toISOString()
    };
    
    const updatedDownloads = [...downloads, newDownload];

    try {
      await axios.post(`${API_BASE}/downloads`, updatedDownloads);
      setDownloads(updatedDownloads);
      setIsAddModalOpen(false);
      setAddForm({ title: '', category: '', fileUrl: '' });
      setAddPdfFile(null);
    } catch (error) {
      console.error('Failed to save new download', error);
      alert('Failed to add download');
    }
  };

  // Extract unique categories for filter or suggestions
  const categories = [...new Set(downloads.map(d => d.category))];

  return (
    <div className="text-white max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Manage Downloads</h2>
          <p className="text-gray-400">Add, edit, and organize downloadable resources.</p>
        </div>
        <button
          onClick={() => {
            setIsAddModalOpen(true);
            setAddForm({ title: '', category: categories.length > 0 ? categories[0] : '', fileUrl: '' });
            setAddPdfFile(null);
            setIsNewCategory(categories.length === 0);
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" />
          Add New File
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {downloads.map((download) => {
            const isEditing = editingId === download.id;

            return (
              <motion.div
                key={download.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-blue-400" />
                  </div>
                  {!isEditing ? (
                    <div>
                        <h3 className="text-xl font-bold line-clamp-1">{download.title}</h3>
                        <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider flex items-center gap-1 mt-1">
                           <FolderOpen className="w-3 h-3"/> {download.category}
                        </div>
                    </div>
                  ) : (
                    <div className="flex-1 space-y-2">
                        <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white w-full focus:outline-none focus:border-blue-500"
                        placeholder="Title"
                        />
                        <input
                        type="text"
                        value={editForm.category}
                        onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white w-full focus:outline-none focus:border-blue-500 text-xs"
                        placeholder="Category"
                        />
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  {!isEditing ? (
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <div className="text-xs text-gray-500 truncate max-w-[150px]">
                        File: {download.fileUrl}
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditClick(download)}
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          title="Edit File"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeletingDownload(download)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete File"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-gray-800 space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 mb-2 block">Current File</label>
                        <div className="flex items-center gap-3">
                          <a 
                            href={editPdfFile ? URL.createObjectURL(editPdfFile) : (editForm.fileUrl?.startsWith('/') ? API_BASE_URL + editForm.fileUrl : editForm.fileUrl)} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-blue-400 hover:text-blue-300 text-sm truncate flex-1 hover:bg-gray-700 transition-colors"
                          >
                            {editPdfFile ? 'View Newly Uploaded' : (editForm.fileUrl ? 'View Current' : 'No file assigned')}
                          </a>
                          <label className="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-1.5 cursor-pointer flex items-center justify-center text-sm font-medium transition-colors shrink-0">
                            <span>Upload New</span>
                            <input 
                              type="file" 
                              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                              className="hidden" 
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  setEditPdfFile(file);
                                }
                              }} 
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSaveEdit(download.id)}
                          className="flex-1 flex justify-center items-center gap-1 bg-green-600 hover:bg-green-700 text-white py-1.5 rounded-lg text-sm transition-colors"
                        >
                          <Save className="w-4 h-4" /> Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex-1 flex justify-center items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white py-1.5 rounded-lg text-sm transition-colors"
                        >
                          <X className="w-4 h-4" /> Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {deletingDownload && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Delete File</h3>
              <p className="text-gray-400 text-sm mb-4">
                This action cannot be undone. Please type <span className="font-bold text-white">{deletingDownload.title}</span> to confirm.
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-red-500"
                placeholder="Type file title"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setDeletingDownload(null); setDeleteConfirmText(''); }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteDownload(deletingDownload.id)}
                  disabled={deleteConfirmText !== deletingDownload.title}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add File Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
            >
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-xl font-bold mb-6">Add New Download</h3>
              
              <form onSubmit={handleAddDownload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={addForm.title}
                    onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="e.g., Product Catalog 2024"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                  {categories.length > 0 && !isNewCategory ? (
                    <select
                      value={addForm.category}
                      onChange={(e) => {
                          if (e.target.value === 'CREATE_NEW') {
                              setIsNewCategory(true);
                              setAddForm({ ...addForm, category: '' });
                          } else {
                              setAddForm({ ...addForm, category: e.target.value });
                          }
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                      <option value="CREATE_NEW" className="font-bold text-blue-400">
                         + Create New Category
                      </option>
                    </select>
                  ) : (
                    <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          required
                          value={addForm.category}
                          onChange={(e) => setAddForm({ ...addForm, category: e.target.value })}
                          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          placeholder="Type new category name..."
                          autoFocus
                        />
                        {categories.length > 0 && (
                            <button 
                                type="button" 
                                onClick={() => {
                                    setIsNewCategory(false);
                                    setAddForm({ ...addForm, category: categories[0] });
                                }}
                                className="text-sm text-blue-400 hover:text-blue-300 text-left w-fit"
                            >
                                ← Back to existing categories
                            </button>
                        )}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">File Document (PDF)</label>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-400 text-sm transition-all flex-1 truncate">
                      {addPdfFile ? 'File ready to upload' : (addForm.fileUrl ? addForm.fileUrl : 'No file selected')}
                    </div>
                    <label className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl px-4 py-2.5 cursor-pointer flex items-center justify-center font-medium transition-colors shrink-0">
                      <span>Upload File</span>
                      <input 
                        type="file" 
                        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setAddPdfFile(file);
                          }
                        }} 
                      />
                    </label>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                  >
                    Add File
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDownloads;
