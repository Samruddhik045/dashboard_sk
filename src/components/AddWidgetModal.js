import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/actions';

const AddWidgetModal = ({ categoryId, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('text');
  const [widgetContent, setWidgetContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      type: widgetType
    };

    if (widgetType === 'text') {
      newWidget.content = widgetContent || 'Sample text content';
    } else if (widgetType === 'pie') {
      newWidget.data = {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        values: [5, 10, 15, 20]
      };
    } else if (widgetType === 'bar') {
      newWidget.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        values: [10, 20, 30, 40],
        label: 'Sample Data'
      };
    } else if (widgetType === 'status') {
      newWidget.data = {
        value: '99%',
        label: 'Sample Status'
      };
    }

    dispatch(addWidget(categoryId, newWidget));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <h2>Add New Widget</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Widget Name:</label>
            <input 
              type="text" 
              value={widgetName} 
              onChange={(e) => setWidgetName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Widget Type:</label>
            <select 
              value={widgetType} 
              onChange={(e) => setWidgetType(e.target.value)}
              required
            >
              <option value="text">Text Widget</option>
              <option value="pie">Pie Chart</option>
              <option value="bar">Bar Graph</option>
              <option value="status">Status Indicator</option>
            </select>
          </div>
          
          {widgetType === 'text' && (
            <div className="form-group">
              <label>Widget Content:</label>
              <textarea 
                value={widgetContent} 
                onChange={(e) => setWidgetContent(e.target.value)} 
                required 
              />
            </div>
          )}

          <button type="submit">Add Widget</button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;