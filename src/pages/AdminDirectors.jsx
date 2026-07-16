import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Save, X, Trash2, ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
import { API_BASE_URL } from '../config';

const AdminDirectors = () => {
  const [directors, setDirectors] = useState([]);
  const [editingDirector, setEditingDirector] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [errors, setErrors] = useState({});
  const [deletingDirector, setDeletingDirector] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [editImageFile, setEditImageFile] = useState(null);

  const API_BASE = `${API_BASE_URL}/api`;

  useEffect(() => {
    fetchDirectors();
  }, []);

  const fetchDirectors = async () => {
    try {
      const res = await axios.get(`${API_BASE}/directors`);
      setDirectors(res.data);
    } catch (error) {
      console.error('Failed to fetch directors', error);
    }
  };

  const handleEditClick = (director) => {
    setEditingDirector({ ...director });
    setIsAdding(false);
    setEditImageFile(null);
  };

  const handleAddClick = () => {
    const newDirector = {
      id: `director-${Date.now()}`,
      name: 'New Director',
      role: 'Director',
      image: '',
      bio: '',
      expertise: '',
      experience: '',
    };
    setEditingDirector(newDirector);
    setIsAdding(true);
    setEditImageFile(null);
  };

  const handleCancel = () => {
    setEditingDirector(null);
    setIsAdding(false);
    setErrors({});
    setEditImageFile(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!editingDirector.name?.trim()) newErrors.name = "Name is required";
    if (!editingDirector.role?.trim()) newErrors.role = "Role is required";
    if (!editingDirector.bio?.trim()) newErrors.bio = "Bio is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    let finalImageUrl = editingDirector.image;
    if (editImageFile) {
      if (editImageFile.size > 10 * 1024 * 1024) {
        alert("Image file size must be 10MB or less");
        return;
      }
      const formData = new FormData();
      formData.append('image', editImageFile);

      try {
        const uploadRes = await axios.post(`${API_BASE}/upload-image`, formData);
        finalImageUrl = uploadRes.data.imageUrl;
      } catch (error) {
        console.error('Failed to upload image', error);
        alert('Failed to upload image');
        return;
      }
    }

    const finalDirector = { ...editingDirector, image: finalImageUrl || "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E" };

    let updatedDirectors;
    if (isAdding) {
      updatedDirectors = [...directors, finalDirector];
    } else {
      updatedDirectors = directors.map(d => d.id === finalDirector.id ? finalDirector : d);
    }

    try {
      await axios.post(`${API_BASE}/directors`, updatedDirectors);
      setDirectors(updatedDirectors);
      setEditingDirector(null);
      setIsAdding(false);
      setEditImageFile(null);
    } catch (error) {
      console.error('Failed to save directors', error);
      alert('Failed to save changes');
    }
  };

  const handleDeleteDirector = async (id) => {
    try {
      // First actually delete from backend (which cleans up supabase image and removes the DB record)
      await axios.delete(`${API_BASE}/directors/${id}`);
      
      // Update local state to remove the director
      const updatedDirectors = directors.filter(d => d.id !== id);
      setDirectors(updatedDirectors);
      setDeletingDirector(null);
      setDeleteConfirmText('');
    } catch (error) {
      console.error('Failed to delete director', error);
      alert('Failed to delete director');
    }
  };

  const handleMoveDirector = async (index, direction) => {
    const newDirectors = [...directors];
    if (direction === 'left' && index > 0) {
      [newDirectors[index - 1], newDirectors[index]] = [newDirectors[index], newDirectors[index - 1]];
    } else if (direction === 'right' && index < newDirectors.length - 1) {
      [newDirectors[index + 1], newDirectors[index]] = [newDirectors[index], newDirectors[index + 1]];
    } else {
      return;
    }

    setDirectors(newDirectors);

    try {
      await axios.post(`${API_BASE}/directors`, newDirectors);
    } catch (error) {
      console.error('Failed to update director order', error);
      alert('Failed to update director order');
      fetchDirectors();
    }
  };

  const handleChange = (field, value) => {
    setEditingDirector({ ...editingDirector, [field]: value });
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (editingDirector) {
    return (
      <div className="flex flex-col gap-6">
        <form
          noValidate
          onSubmit={(e) => { e.preventDefault(); handleSave(); }}
          className="w-full max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-blue-400" />
              {isAdding ? 'Add New Director' : 'Edit Director'}
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" /> Save
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Name</label>
                <input
                  type="text"
                  value={editingDirector.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Role</label>
                <input
                  type="text"
                  value={editingDirector.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  className={`w-full bg-gray-800 border ${errors.role ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.role && <span className="text-red-500 text-xs mt-1 block">{errors.role}</span>}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Bio</label>
              <textarea
                value={editingDirector.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.bio ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 h-24 resize-none`}
              />
              {errors.bio && <span className="text-red-500 text-xs mt-1 block">{errors.bio}</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Expertise</label>
                <input
                  type="text"
                  value={editingDirector.expertise}
                  onChange={(e) => handleChange('expertise', e.target.value)}
                  className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Experience</label>
                <input
                  type="text"
                  value={editingDirector.experience}
                  onChange={(e) => handleChange('experience', e.target.value)}
                  className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Director Image</label>
              <div className="flex items-center gap-3">
                {editingDirector.image && !editImageFile && (
                   <img src={editingDirector.image} alt="Preview" className="w-12 h-12 rounded-full object-cover border border-gray-700" />
                )}
                <div className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm transition-all flex-1 truncate">
                  {editImageFile ? editImageFile.name : (editingDirector.image ? editingDirector.image.substring(0,50) + "..." : 'No image selected')}
                </div>
                <label className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2 cursor-pointer flex items-center justify-center font-medium transition-colors shrink-0">
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setEditImageFile(file);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="text-white max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Manage Board of Directors</h2>
          <p className="text-gray-400">View and edit the directors displayed on the website.</p>
        </div>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" />
          Add Director
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {directors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-gray-800">
                {director.image ? (
                   <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <UserCircle className="w-16 h-16" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{director.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm">{director.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{director.bio}</p>

                <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex gap-1.5 flex-wrap items-center justify-between w-full">
                    <div className='flex flex-wrap gap-1 items-center'>
                      <button
                        onClick={() => handleMoveDirector(index, 'left')}
                        disabled={index === 0}
                        className="p-1.5 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-gray-300 transition-colors"
                        title="Move Left/Up"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleMoveDirector(index, 'right')}
                        disabled={index === directors.length - 1}
                        className="p-1.5 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-gray-300 transition-colors mr-1"
                        title="Move Right/Down"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                        onClick={() => handleEditClick(director)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                        >
                        <Edit2 className="w-4 h-4" /> Edit
                        </button>
                        <button
                        onClick={() => setDeletingDirector(director)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-sm transition-colors"
                        >
                        <Trash2 className="w-4 h-4" /> Delete
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {deletingDirector && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Delete Director</h3>
              <p className="text-gray-400 text-sm mb-4">
                This action cannot be undone. Please type <span className="font-bold text-white">{deletingDirector.name}</span> to confirm.
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-red-500"
                placeholder="Type director name"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setDeletingDirector(null); setDeleteConfirmText(''); }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteDirector(deletingDirector.id)}
                  disabled={deleteConfirmText !== deletingDirector.name}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDirectors;
