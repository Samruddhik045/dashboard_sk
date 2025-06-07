import React from 'react';
import Widget from './Widget';

const Category = ({ category, onAddWidget }) => {
  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button onClick={onAddWidget} className="add-widget-btn">+ Add Widget</button>
      </div>
      <div className="widgets-container">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;