import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { API_BASE_URL } from '../config';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const { darkMode } = useDarkMode();

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/gallery`);
      const data = res.data;
      setItems(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (err) {
      console.error('Failed to fetch gallery', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen pt-32 pb-20 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-6 ${darkMode ? 'from-white to-gray-400' : 'from-gray-900 to-gray-600'}`}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Explore our visual journey through images and videos.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No media available yet. Check back later!
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`break-inside-avoid relative group rounded-2xl overflow-hidden border cursor-pointer ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-md'}`}
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.url?.startsWith('/') ? API_BASE_URL + item.url : item.url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={item.url?.startsWith('/') ? API_BASE_URL + item.url : item.url} 
                    alt="Gallery item" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Optional overlay for premium feel */}
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'from-gray-950/80' : 'from-gray-900/50'}`}></div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full size media */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on media from closing modal
            >
              {selectedMedia.type === 'video' ? (
                <video 
                  src={selectedMedia.url?.startsWith('/') ? API_BASE_URL + selectedMedia.url : selectedMedia.url} 
                  controls
                  autoPlay
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              ) : (
                <img 
                  src={selectedMedia.url?.startsWith('/') ? API_BASE_URL + selectedMedia.url : selectedMedia.url} 
                  alt="Gallery expanded" 
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
