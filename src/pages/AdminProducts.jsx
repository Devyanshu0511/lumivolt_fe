import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Save, X, Package, LayoutTemplate, Trash2 } from 'lucide-react';
import { ProductDetailContent } from './ProductDetail';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // null means list view, object means split view (edit/add)
  const [isAdding, setIsAdding] = useState(false);
  const [errors, setErrors] = useState({});
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [editImageFile, setEditImageFile] = useState(null);
  
  const API_BASE = 'http://localhost:3001/api';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(JSON.parse(JSON.stringify(product))); // Deep copy
    setIsAdding(false);
    setEditImageFile(null);
  };

  const handleAddClick = () => {
    const newProduct = {
      id: `product-${Date.now()}`,
      name: 'New Product',
      tagline: 'Short catchy tagline',
      badge: 'New',
      colorLight: '#3b82f6',
      colorDark: '#fbbf24',
      path: `/products/new`,
      image: '',
      description: 'Detailed description of the product.',
      overviewSpecs: [],
      overviewDetails: [],
      specs: [],
      features: [],
      benefits: [],
      certifications: [],
      ecoStats: {
        efficiencyValue: 20,
        lifespan: 25,
        carbonPayback: 2.0,
        energyOutput: 400
      }
    };
    setEditingProduct(newProduct);
    setIsAdding(true);
    setEditImageFile(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAdding(false);
    setErrors({});
    setEditImageFile(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!editingProduct.name?.trim()) newErrors.name = "Name is required";
    if (!editingProduct.badge?.trim()) newErrors.badge = "Badge is required";
    if (!editingProduct.tagline?.trim()) newErrors.tagline = "Tagline is required";
    if (!editingProduct.description?.trim()) newErrors.description = "Description is required";
    if (!editingProduct.colorLight?.trim()) newErrors.colorLight = "Color (Light) is required";
    if (!editingProduct.colorDark?.trim()) newErrors.colorDark = "Color (Dark) is required";
    
    if (!editingProduct.features || editingProduct.features.length === 0) {
      newErrors.features_empty = "At least one feature is required";
    } else {
      editingProduct.features.forEach((feature, index) => {
        if (!feature?.trim()) newErrors[`feature_${index}`] = "Feature is required";
      });
    }
    
    if (!editingProduct.benefits || editingProduct.benefits.length === 0) {
      newErrors.benefits_empty = "At least one benefit is required";
    } else {
      editingProduct.benefits.forEach((benefit, index) => {
        if (!benefit?.trim()) newErrors[`benefit_${index}`] = "Benefit is required";
      });
    }
    
    if (!editingProduct.specs || editingProduct.specs.length === 0) {
      newErrors.specs_empty = "At least one specification is required";
    } else {
      editingProduct.specs.forEach((spec, index) => {
        if (!spec.label?.trim()) newErrors[`spec_label_${index}`] = "Label is required";
        if (!spec.value?.trim()) newErrors[`spec_value_${index}`] = "Value is required";
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    
    let finalImageUrl = editingProduct.image;
    if (editImageFile) {
      const formData = new FormData();
      formData.append('image', editImageFile);
      
      try {
        const uploadRes = await fetch(`${API_BASE}/upload-image`, {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();
        finalImageUrl = uploadData.imageUrl;
      } catch (error) {
        console.error('Failed to upload image', error);
        alert('Failed to upload image');
        return;
      }
    }
    
    const finalProduct = { ...editingProduct, image: finalImageUrl };
    
    let updatedProducts;
    if (isAdding) {
      updatedProducts = [...products, finalProduct];
    } else {
      updatedProducts = products.map(p => p.id === finalProduct.id ? finalProduct : p);
    }

    try {
      await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProducts)
      });
      setProducts(updatedProducts);
      setEditingProduct(null);
      setIsAdding(false);
      setEditImageFile(null);
    } catch (error) {
      console.error('Failed to save products', error);
      alert('Failed to save changes');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const updatedProducts = products.filter(p => p.id !== id);
      await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProducts)
      });
      setProducts(updatedProducts);
      setDeletingProduct(null);
      setDeleteConfirmText('');
    } catch (error) {
      console.error('Failed to delete product', error);
      alert('Failed to delete product');
    }
  };

  const handleChange = (field, value) => {
    setEditingProduct({ ...editingProduct, [field]: value });
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...editingProduct[field]];
    newArray[index] = value;
    setEditingProduct({ ...editingProduct, [field]: newArray });
    setErrors(prev => ({ ...prev, [`${field.slice(0, -1)}_${index}`]: undefined }));
  };

  const handleAddArrayItem = (field, emptyValue = '') => {
    setEditingProduct({ 
      ...editingProduct, 
      [field]: [...(editingProduct[field] || []), emptyValue] 
    });
    setErrors(prev => ({ ...prev, [`${field}_empty`]: undefined }));
  };

  const handleRemoveArrayItem = (field, index) => {
    const newArray = [...editingProduct[field]];
    newArray.splice(index, 1);
    setEditingProduct({ ...editingProduct, [field]: newArray });
  };

  const handleSpecChange = (index, key, value) => {
    const newSpecs = [...editingProduct.specs];
    newSpecs[index] = { ...newSpecs[index], [key]: value };
    setEditingProduct({ ...editingProduct, specs: newSpecs });
    setErrors(prev => ({ ...prev, [`spec_${key}_${index}`]: undefined }));
  };

  if (editingProduct) {
    return (
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-6rem)]">
        {/* Left Side: Form */}
        <form 
          noValidate
          onSubmit={(e) => { e.preventDefault(); handleSave(); }}
          className="w-full lg:w-1/2 flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <LayoutTemplate className="w-5 h-5 text-blue-400" />
              {isAdding ? 'Add New Product' : 'Edit Product'}
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
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Badge</label>
                <input
                  type="text"
                  value={editingProduct.badge}
                  onChange={(e) => handleChange('badge', e.target.value)}
                  className={`w-full bg-gray-800 border ${errors.badge ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.badge && <span className="text-red-500 text-xs mt-1 block">{errors.badge}</span>}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Tagline</label>
              <input
                type="text"
                value={editingProduct.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.tagline ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.tagline && <span className="text-red-500 text-xs mt-1 block">{errors.tagline}</span>}
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Description</label>
              <textarea
                value={editingProduct.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.description ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 h-24 resize-none`}
              />
              {errors.description && <span className="text-red-500 text-xs mt-1 block">{errors.description}</span>}
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Product Image</label>
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm transition-all flex-1 truncate">
                  {editImageFile ? editImageFile.name : (editingProduct.image ? editingProduct.image : 'No image selected')}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Color (Light Mode)</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={editingProduct.colorLight}
                    onChange={(e) => handleChange('colorLight', e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer bg-gray-800 border border-gray-700"
                  />
                  <input
                    type="text"
                    value={editingProduct.colorLight}
                    onChange={(e) => handleChange('colorLight', e.target.value)}
                    className={`flex-1 bg-gray-800 border ${errors.colorLight ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                  />
                </div>
                {errors.colorLight && <span className="text-red-500 text-xs mt-1 block">{errors.colorLight}</span>}
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Color (Dark Mode)</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={editingProduct.colorDark}
                    onChange={(e) => handleChange('colorDark', e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer bg-gray-800 border border-gray-700"
                  />
                  <input
                    type="text"
                    value={editingProduct.colorDark}
                    onChange={(e) => handleChange('colorDark', e.target.value)}
                    className={`flex-1 bg-gray-800 border ${errors.colorDark ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500`}
                  />
                </div>
                {errors.colorDark && <span className="text-red-500 text-xs mt-1 block">{errors.colorDark}</span>}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                Features
              </h4>
              <div className="space-y-3 mb-6">
                {errors.features_empty && <span className="text-red-500 text-xs block mb-2">{errors.features_empty}</span>}
                {editingProduct.features?.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleArrayChange('features', index, e.target.value)}
                        className={`flex-1 bg-gray-800 border ${errors[`feature_${index}`] ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500`}
                        placeholder="Enter feature description..."
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveArrayItem('features', index)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                        title="Remove Feature"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {errors[`feature_${index}`] && <span className="text-red-500 text-xs block">{errors[`feature_${index}`]}</span>}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddArrayItem('features')}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                >
                  <Plus className="w-4 h-4" /> Add Feature
                </button>
              </div>

              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                Benefits
              </h4>
              <div className="space-y-3 mb-6">
                {errors.benefits_empty && <span className="text-red-500 text-xs block mb-2">{errors.benefits_empty}</span>}
                {editingProduct.benefits?.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                        className={`flex-1 bg-gray-800 border ${errors[`benefit_${index}`] ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500`}
                        placeholder="Enter benefit description..."
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveArrayItem('benefits', index)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                        title="Remove Benefit"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {errors[`benefit_${index}`] && <span className="text-red-500 text-xs block">{errors[`benefit_${index}`]}</span>}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddArrayItem('benefits')}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                >
                  <Plus className="w-4 h-4" /> Add Benefit
                </button>
              </div>

              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                Specifications
              </h4>
              <div className="space-y-3 mb-6">
                {errors.specs_empty && <span className="text-red-500 text-xs block mb-2">{errors.specs_empty}</span>}
                {editingProduct.specs?.map((spec, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div className="w-1/3">
                        <input
                          type="text"
                          value={spec.label || ''}
                          onChange={(e) => handleSpecChange(index, 'label', e.target.value)}
                          className={`w-full bg-gray-800 border ${errors[`spec_label_${index}`] ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500`}
                          placeholder="Label (e.g., Power)"
                        />
                        {errors[`spec_label_${index}`] && <span className="text-red-500 text-xs mt-1 block">{errors[`spec_label_${index}`]}</span>}
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={spec.value || ''}
                          onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                          className={`w-full bg-gray-800 border ${errors[`spec_value_${index}`] ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500`}
                          placeholder="Value (e.g., 550W)"
                        />
                        {errors[`spec_value_${index}`] && <span className="text-red-500 text-xs mt-1 block">{errors[`spec_value_${index}`]}</span>}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveArrayItem('specs', index)}
                        className="p-2 h-[38px] bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                        title="Remove Spec"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddArrayItem('specs', { label: '', value: '' })}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                >
                  <Plus className="w-4 h-4" /> Add Specification
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Right Side: Live Preview */}
        <div className="w-full lg:w-1/2 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-xs text-center py-1 font-semibold z-50 shadow-md">
            Live Preview
          </div>
          <div className="h-full pt-6">
            <ProductDetailContent productData={editingProduct} isPreview={true} darkMode={true} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Manage Products</h2>
          <p className="text-gray-400">View and edit the products displayed on the website.</p>
        </div>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group flex flex-col"
            >
              <div 
                className="h-32 flex items-center justify-center p-6 relative"
                style={{ background: `linear-gradient(135deg, ${product.colorDark}20, ${product.colorDark}10)` }}
              >
                <Package className="w-12 h-12" style={{ color: product.colorDark }} />
                <span 
                  className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded bg-black/20"
                  style={{ color: product.colorLight }}
                >
                  {product.badge}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.tagline}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">{product.id}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" /> Edit
                    </button>
                    <button
                      onClick={() => setDeletingProduct(product)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {deletingProduct && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Delete Product</h3>
              <p className="text-gray-400 text-sm mb-4">
                This action cannot be undone. Please type <span className="font-bold text-white">{deletingProduct.name}</span> to confirm.
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-red-500"
                placeholder="Type product name"
              />
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => { setDeletingProduct(null); setDeleteConfirmText(''); }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteProduct(deletingProduct.id)}
                  disabled={deleteConfirmText !== deletingProduct.name}
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

export default AdminProducts;
