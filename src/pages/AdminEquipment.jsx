import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Save, Trash2, ChevronLeft, ChevronRight, Zap, Factory, ShieldCheck, Boxes, Activity, Battery, Cpu, Layers } from 'lucide-react';
import { API_BASE_URL } from '../config';

const ICONS = {
  Zap: Zap,
  Factory: Factory,
  ShieldCheck: ShieldCheck,
  Boxes: Boxes,
  Activity: Activity,
  Battery: Battery,
  Cpu: Cpu,
  Layers: Layers
};

const COLORS = [
  { name: 'Amber', value: 'amber' },
  { name: 'Blue', value: 'blue' },
  { name: 'Emerald', value: 'emerald' },
  { name: 'Purple', value: 'purple' },
  { name: 'Rose', value: 'rose' },
  { name: 'Cyan', value: 'cyan' },
];

const AdminEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [errors, setErrors] = useState({});
  const [deletingEquipment, setDeletingEquipment] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const API_BASE = `${API_BASE_URL}/api`;

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const res = await axios.get(`${API_BASE}/equipments`);
      setEquipments(res.data);
    } catch (error) {
      console.error('Failed to fetch equipments', error);
    }
  };

  const handleEditClick = (equipment) => {
    setEditingEquipment({ ...equipment });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    const newEquipment = {
      id: `eq-${Date.now()}`,
      title: 'New Equipment',
      desc: '',
      color: 'amber',
      icon: 'Zap',
    };
    setEditingEquipment(newEquipment);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setEditingEquipment(null);
    setIsAdding(false);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!editingEquipment.title?.trim()) newErrors.title = "Title is required";
    if (!editingEquipment.desc?.trim()) newErrors.desc = "Description is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    let updatedEquipments;
    if (isAdding) {
      updatedEquipments = [...equipments, editingEquipment];
    } else {
      updatedEquipments = equipments.map(e => e.id === editingEquipment.id ? editingEquipment : e);
    }

    try {
      await axios.post(`${API_BASE}/equipments`, updatedEquipments);
      setEquipments(updatedEquipments);
      setEditingEquipment(null);
      setIsAdding(false);
    } catch (error) {
      console.error('Failed to save equipments', error);
      alert('Failed to save changes');
    }
  };

  const handleDeleteEquipment = async (id) => {
    try {
      await axios.delete(`${API_BASE}/equipments/${id}`);
      const updatedEquipments = equipments.filter(e => e.id !== id);
      setEquipments(updatedEquipments);
      setDeletingEquipment(null);
      setDeleteConfirmText('');
    } catch (error) {
      console.error('Failed to delete equipment', error);
      alert('Failed to delete equipment');
    }
  };

  const handleMoveEquipment = async (index, direction) => {
    const newEquipments = [...equipments];
    if (direction === 'left' && index > 0) {
      [newEquipments[index - 1], newEquipments[index]] = [newEquipments[index], newEquipments[index - 1]];
    } else if (direction === 'right' && index < newEquipments.length - 1) {
      [newEquipments[index + 1], newEquipments[index]] = [newEquipments[index], newEquipments[index + 1]];
    } else {
      return;
    }

    setEquipments(newEquipments);

    try {
      await axios.post(`${API_BASE}/equipments`, newEquipments);
    } catch (error) {
      console.error('Failed to update equipment order', error);
      alert('Failed to update equipment order');
      fetchEquipments();
    }
  };

  const handleChange = (field, value) => {
    setEditingEquipment({ ...editingEquipment, [field]: value });
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const renderIcon = (iconName, className) => {
    const IconComponent = ICONS[iconName] || ICONS['Zap'];
    return <IconComponent className={className} />;
  };

  const getColorClasses = (colorName) => {
    const map = {
      amber: "from-amber-600 to-orange-600 text-amber-500",
      blue: "from-blue-600 to-cyan-600 text-blue-500",
      emerald: "from-emerald-600 to-teal-600 text-emerald-500",
      purple: "from-purple-600 to-pink-600 text-purple-500",
      rose: "from-rose-600 to-red-600 text-rose-500",
      cyan: "from-cyan-600 to-sky-600 text-cyan-500",
    };
    return map[colorName] || map.amber;
  };

  if (editingEquipment) {
    return (
      <div className="flex flex-col gap-6">
        <form
          noValidate
          onSubmit={(e) => { e.preventDefault(); handleSave(); }}
          className="w-full max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Factory className="w-5 h-5 text-blue-400" />
              {isAdding ? 'Add New Equipment' : 'Edit Equipment'}
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
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Title</label>
              <input
                type="text"
                value={editingEquipment.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.title ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.title && <span className="text-red-500 text-xs mt-1 block">{errors.title}</span>}
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Description</label>
              <textarea
                value={editingEquipment.desc}
                onChange={(e) => handleChange('desc', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.desc ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 h-24 resize-none`}
              />
              {errors.desc && <span className="text-red-500 text-xs mt-1 block">{errors.desc}</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Color Theme</label>
                <select
                  value={editingEquipment.color}
                  onChange={(e) => handleChange('color', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  {COLORS.map(c => (
                    <option key={c.value} value={c.value}>{c.name}</option>
                  ))}
                </select>
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-500">Preview:</span>
                    <div className={`h-2 w-full max-w-[100px] rounded-full bg-gradient-to-r ${getColorClasses(editingEquipment.color).split(' text-')[0]}`}></div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Icon</label>
                <select
                  value={editingEquipment.icon}
                  onChange={(e) => handleChange('icon', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  {Object.keys(ICONS).map(iconName => (
                    <option key={iconName} value={iconName}>{iconName}</option>
                  ))}
                </select>
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-500">Preview:</span>
                    <div className="p-1.5 bg-gray-800 rounded-md inline-flex">
                        {renderIcon(editingEquipment.icon, `w-5 h-5 ${getColorClasses(editingEquipment.color).split(' ').pop()}`)}
                    </div>
                </div>
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
          <h2 className="text-3xl font-bold mb-2">Manage Equipment Cards</h2>
          <p className="text-gray-400">Manage the equipment shown in the Technology section.</p>
        </div>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" />
          Add Equipment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {equipments.map((equipment, index) => {
            const colorClasses = getColorClasses(equipment.color);
            const gradientClass = colorClasses.split(' text-')[0];
            const textClass = colorClasses.split(' ').pop();

            return (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group flex flex-col relative shadow-xl"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${gradientClass}`} />
              <div className="p-6 flex-1 flex flex-col">
                
                <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gray-800 shadow-inner">
                        {renderIcon(equipment.icon, `w-6 h-6 ${textClass}`)}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{equipment.title}</h3>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{equipment.desc}</p>

                <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex gap-1.5 flex-wrap items-center justify-between w-full">
                    <div className='flex flex-wrap gap-1 items-center'>
                      <button
                        onClick={() => handleMoveEquipment(index, 'left')}
                        disabled={index === 0}
                        className="p-1.5 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-gray-300 transition-colors"
                        title="Move Left/Up"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleMoveEquipment(index, 'right')}
                        disabled={index === equipments.length - 1}
                        className="p-1.5 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-gray-300 transition-colors mr-1"
                        title="Move Right/Down"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                        onClick={() => handleEditClick(equipment)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                        >
                        <Edit2 className="w-4 h-4" /> Edit
                        </button>
                        <button
                        onClick={() => setDeletingEquipment(equipment)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-sm transition-colors"
                        >
                        <Trash2 className="w-4 h-4" /> Delete
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {deletingEquipment && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Delete Equipment</h3>
              <p className="text-gray-400 text-sm mb-4">
                This action cannot be undone. Please type <span className="font-bold text-white">{deletingEquipment.title}</span> to confirm.
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-red-500"
                placeholder="Type equipment title"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setDeletingEquipment(null); setDeleteConfirmText(''); }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteEquipment(deletingEquipment.id)}
                  disabled={deleteConfirmText !== deletingEquipment.title}
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

export default AdminEquipment;
