import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';

// Configure the Redux store with the RTK Query API reducer and middleware
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
