import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Upload, Trash2, Image as ImageIcon, Film, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../config';

const AdminGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/gallery`);
      const data = res.data;
      // Sort by newest first
      setItems(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (err) {
      console.error('Failed to fetch gallery', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be 10MB or less');
      return;
    }
    setError(null);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('media', file);

      // Upload file
      const uploadRes = await axios.post(`${API_BASE_URL}/api/upload-gallery`, formData);
      const { url, type } = uploadRes.data;

      // Add to gallery JSON
      const newItem = {
        id: Date.now().toString(),
        url,
        type,
        createdAt: new Date().toISOString()
      };

      const updatedItems = [newItem, ...items];
      
      await axios.post(`${API_BASE_URL}/api/gallery`, updatedItems);

      setItems(updatedItems);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      await axios.delete(`${API_BASE_URL}/api/gallery/${id}`);
      
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Gallery Management</h2>
          <p className="text-gray-400 mt-1">Upload and manage photos and videos for the public gallery.</p>
        </div>
        
        <div className="relative">
          <input
            type="file"
            id="media-upload"
            accept="image/*,video/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
          <label
            htmlFor="media-upload"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              uploading 
                ? 'bg-blue-600/50 text-blue-300 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-500 cursor-pointer'
            }`}
          >
            {uploading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Upload className="w-5 h-5" />
            )}
            {uploading ? 'Uploading...' : 'Upload Media'}
          </label>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 bg-gray-900 rounded-xl border border-gray-800">
          <ImageIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-300">No media found</h3>
          <p className="text-gray-500 mt-2">Upload your first photo or video (max 5MB).</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id}
              className="relative group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 aspect-square flex items-center justify-center"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.url?.startsWith('/') ? API_BASE_URL + item.url : item.url} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={item.url?.startsWith('/') ? API_BASE_URL + item.url : item.url} 
                  alt="Gallery" 
                  className="w-full h-full object-cover"
                />
              )}
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <div className="absolute top-2 left-2 bg-black/50 p-1.5 rounded-lg backdrop-blur-sm">
                  {item.type === 'video' ? (
                    <Film className="w-4 h-4 text-white" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-white" />
                  )}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-lg backdrop-blur-sm transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
