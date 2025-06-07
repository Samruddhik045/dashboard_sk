import React, { createContext, useState } from 'react';
import initialData from '../data/initialData.json';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const addWidget = (categoryId, widget) => {
    setData(prev => {
      const updated = prev.categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            widgets: [...cat.widgets, widget]
          };
        }
        return cat;
      });
      return { ...prev, categories: updated };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData(prev => {
      const updated = prev.categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            widgets: cat.widgets.filter(w => w.id !== widgetId)
          };
        }
        return cat;
      });
      return { ...prev, categories: updated };
    });
  };

  return (
    <WidgetContext.Provider value={{ data, addWidget, removeWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};
