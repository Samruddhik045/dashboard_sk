import React from 'react';
import { useDashboardStore } from '../store/dashboardStore';

const WidgetListModal = ({ widgets, onClose }) => {
  const { removeWidget } = useDashboardStore();

  return (
    <div className="modal-overlay">
      <div className="modal large-modal">
        <h2>All Widgets</h2>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="widget-list">
          {widgets.map((widget) => (
            <div key={`${widget.categoryId}-${widget.id}`} className="widget-item">
              <div className="widget-info">
                <h3>{widget.name}</h3>
                <p className="category-name">{widget.categoryName}</p>
                {widget.content && <p className="widget-content">{widget.content}</p>}
              </div>
              <button 
                className="remove-widget-btn"
                onClick={() => {
                  removeWidget(widget.categoryId, widget.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetListModal;