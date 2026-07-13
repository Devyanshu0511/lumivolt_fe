import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Save, X, FileText, Shield, RefreshCw, AlertTriangle, Cookie, Lock, Trash2 } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  FileText: FileText,
  RefreshCw: RefreshCw,
  AlertTriangle: AlertTriangle,
  Cookie: Cookie,
  Lock: Lock,
};

const AdminPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', pdfUrl: '' });
  const [editPdfFile, setEditPdfFile] = useState(null);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({ title: '', description: '', pdfUrl: '' });
  const [addPdfFile, setAddPdfFile] = useState(null);

  const [deletingPolicy, setDeletingPolicy] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const API_BASE = 'http://localhost:3001/api';

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const res = await fetch(`${API_BASE}/policies`);
      const data = await res.json();
      setPolicies(data);
    } catch (error) {
      console.error('Failed to fetch policies', error);
    }
  };

  const handleEditClick = (policy) => {
    setEditingId(policy.id);
    setEditForm({
      title: policy.title,
      description: policy.description,
      pdfUrl: policy.pdfUrl
    });
    setEditPdfFile(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditPdfFile(null);
  };

  const handleSaveEdit = async (id) => {
    let finalPdfUrl = editForm.pdfUrl;

    if (editPdfFile) {
      const formData = new FormData();
      formData.append('pdf', editPdfFile);
      
      try {
        const uploadRes = await fetch(`${API_BASE}/upload`, {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();
        finalPdfUrl = uploadData.pdfUrl;
      } catch (error) {
        console.error('Failed to upload PDF', error);
        alert('Failed to upload PDF');
        return;
      }
    }

    const updatedPolicies = policies.map(p => 
      p.id === id ? { ...p, ...editForm, pdfUrl: finalPdfUrl } : p
    );

    try {
      await fetch(`${API_BASE}/policies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPolicies)
      });
      setPolicies(updatedPolicies);
      setEditingId(null);
      setEditPdfFile(null);
    } catch (error) {
      console.error('Failed to save policies', error);
      alert('Failed to save changes');
    }
  };

  const handleDeletePolicy = async (id) => {
    try {
      const updatedPolicies = policies.filter(p => p.id !== id);
      await fetch(`${API_BASE}/policies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPolicies)
      });
      setPolicies(updatedPolicies);
      setDeletingPolicy(null);
      setDeleteConfirmText('');
    } catch (error) {
      console.error('Failed to delete policy', error);
      alert('Failed to delete policy');
    }
  };

  const handleAddPolicy = async (e) => {
    e.preventDefault();
    let finalPdfUrl = addForm.pdfUrl || '/dummy.pdf';

    if (addPdfFile) {
      const formData = new FormData();
      formData.append('pdf', addPdfFile);
      
      try {
        const uploadRes = await fetch(`${API_BASE}/upload`, {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();
        finalPdfUrl = uploadData.pdfUrl;
      } catch (error) {
        console.error('Failed to upload PDF', error);
        alert('Failed to upload PDF');
        return;
      }
    }

    const newId = `policy-${Date.now()}`;
    const newPolicy = {
      id: newId,
      title: addForm.title,
      description: addForm.description,
      pdfUrl: finalPdfUrl,
      icon: 'FileText'
    };
    
    const updatedPolicies = [...policies, newPolicy];

    try {
      await fetch(`${API_BASE}/policies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPolicies)
      });
      setPolicies(updatedPolicies);
      setIsAddModalOpen(false);
      setAddForm({ title: '', description: '', pdfUrl: '' });
      setAddPdfFile(null);
    } catch (error) {
      console.error('Failed to save new policy', error);
      alert('Failed to add policy');
    }
  };

  return (
    <div className="text-white max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Manage Policies</h2>
          <p className="text-gray-400">View and edit the policies displayed on the website.</p>
        </div>
        <button
          onClick={() => {
            setIsAddModalOpen(true);
            setAddForm({ title: '', description: '', pdfUrl: '' });
            setAddPdfFile(null);
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" />
          Add New Policy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {policies.map((policy) => {
            const Icon = iconMap[policy.icon] || FileText;
            const isEditing = editingId === policy.id;

            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  {!isEditing ? (
                    <h3 className="text-xl font-bold line-clamp-1">{policy.title}</h3>
                  ) : (
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white w-full focus:outline-none focus:border-blue-500"
                      placeholder="Title"
                    />
                  )}
                </div>

                <div className="flex-1 mb-4">
                  {!isEditing ? (
                    <p className="text-gray-400 text-sm line-clamp-3">{policy.description}</p>
                  ) : (
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white w-full h-24 text-sm focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Description"
                    />
                  )}
                </div>

                <div className="mt-auto">
                  {!isEditing ? (
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <div className="text-xs text-gray-500 truncate max-w-[150px]">
                        PDF: {policy.pdfUrl}
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditClick(policy)}
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          title="Edit Policy"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeletingPolicy(policy)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete Policy"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-gray-800 space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 mb-2 block">Current PDF</label>
                        <div className="flex items-center gap-3">
                          <a 
                            href={editPdfFile ? URL.createObjectURL(editPdfFile) : editForm.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-blue-400 hover:text-blue-300 text-sm truncate flex-1 hover:bg-gray-700 transition-colors"
                          >
                            {editPdfFile ? 'View Newly Uploaded PDF' : (editForm.pdfUrl ? 'View Current PDF' : 'No PDF assigned')}
                          </a>
                          <label className="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-1.5 cursor-pointer flex items-center justify-center text-sm font-medium transition-colors shrink-0">
                            <span>Upload New</span>
                            <input 
                              type="file" 
                              accept="application/pdf" 
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
                          onClick={() => handleSaveEdit(policy.id)}
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
        {deletingPolicy && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Delete Policy</h3>
              <p className="text-gray-400 text-sm mb-4">
                This action cannot be undone. Please type <span className="font-bold text-white">{deletingPolicy.title}</span> to confirm.
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-red-500"
                placeholder="Type policy title"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setDeletingPolicy(null); setDeleteConfirmText(''); }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeletePolicy(deletingPolicy.id)}
                  disabled={deleteConfirmText !== deletingPolicy.title}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Policy Modal */}
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
              
              <h3 className="text-xl font-bold mb-6">Add New Policy</h3>
              
              <form onSubmit={handleAddPolicy} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={addForm.title}
                    onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="e.g., Returns Policy"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                  <textarea
                    required
                    value={addForm.description}
                    onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white h-24 resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Brief description of the policy"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Policy Document (PDF)</label>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-400 text-sm transition-all flex-1 truncate">
                      {addPdfFile ? 'PDF ready to upload' : (addForm.pdfUrl ? addForm.pdfUrl : 'No PDF selected')}
                    </div>
                    <label className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl px-4 py-2.5 cursor-pointer flex items-center justify-center font-medium transition-colors shrink-0">
                      <span>Upload PDF</span>
                      <input 
                        type="file" 
                        accept="application/pdf" 
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
                    Add Policy
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

export default AdminPolicies;
