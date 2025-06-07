import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/actions';
import PieChart from './charts/PieChart';
import BarGraph from './charts/BarGraph';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  const renderContent = () => {
    switch(widget.type) {
      case 'pie':
        return widget.data ? <PieChart data={widget.data} /> : <div>No chart data</div>;
      case 'bar':
        return widget.data ? <BarGraph data={widget.data} /> : <div>No chart data</div>;
      case 'status':
        return (
          <div className="status-widget">
            <div className="status-value">{widget.data?.value || 'N/A'}</div>
            <div className="status-label">{widget.data?.label || 'Status'}</div>
          </div>
        );
      default:
        return <div className="widget-content">{widget.content || 'No content'}</div>;
    }
  };

  return (
    <div className="widget" data-type={widget.type}>
      <button className="remove-widget" onClick={handleRemove}>×</button>
      <h3>{widget.name}</h3>
      {renderContent()}
    </div>
  );
};

export default Widget;