import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  categories: []
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { 
                ...category, 
                widgets: [...category.widgets, action.payload.widget] 
              }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { 
                ...category, 
                widgets: category.widgets.filter(w => w.id !== action.payload.widgetId) 
              }
            : category
        )
      };
    default:
      return state;
  }
}