import { create } from 'zustand';
import dashboardData from '../data/dashboard.json';

const useDashboardStore = create((set) => ({
  categories: dashboardData.categories,
  searchTerm: '',
  

  addWidget: (categoryId, widget) => set((state) => ({
    categories: state.categories.map(category => 
      category.id === categoryId 
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    )
  })),


  removeWidget: (categoryId, widgetId) => set((state) => ({
    categories: state.categories.map(category => 
      category.id === categoryId 
        ? { ...category, widgets: category.widgets.filter(w => w.id !== widgetId) }
        : category
    )
  })),

 
  setSearchTerm: (term) => set({ searchTerm: term }),
  getAllWidgets: () => {
    return useDashboardStore.getState().categories.flatMap(
      category => category.widgets.map(widget => ({
        ...widget,
        categoryId: category.id,
        categoryName: category.name
      }))
    );
  }
}));

export { useDashboardStore };