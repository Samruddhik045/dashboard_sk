import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers';
import dashboardData from '../data/dashboardData.json';

const preloadedState = {
  categories: dashboardData.categories
};

const store = configureStore({
  reducer: dashboardReducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
});


export { store };