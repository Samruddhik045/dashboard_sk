import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import SearchWidgets from './SearchWidgets';


const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWidget = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAddModal(true);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="dashboard">
      <h1>CNAPP Dashboard</h1>
      
      <SearchWidgets searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {filteredCategories.map(category => (
        <Category 
          key={category.id} 
          category={category} 
          onAddWidget={() => handleAddWidget(category.id)}
        />
      ))}
      
      {showAddModal && (
        <AddWidgetModal 
          categoryId={selectedCategory} 
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;