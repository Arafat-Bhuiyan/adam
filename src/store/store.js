import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/authApi";
import { dashboardApi } from "./services/dashboardApi";
import { userManagementApi } from "./services/userManagementApi";
import { jobManagementApi } from "./services/jobManagementApi";
import { jobMatchingApi } from "./services/jobMatchingApi";
import { settingApi } from "./services/settingApi";
import { disputeManagementApi } from "./services/disputeManagementApi";
import authReducer from "./authSlice";
import { userApi } from "./services/user/userApi";

// Configure the Redux store with the RTK Query API reducer and middleware
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userManagementApi.reducerPath]: userManagementApi.reducer,
    [jobManagementApi.reducerPath]: jobManagementApi.reducer,
    [jobMatchingApi.reducerPath]: jobMatchingApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [disputeManagementApi.reducerPath]: disputeManagementApi.reducer,
    auth: authReducer,
    // add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      dashboardApi.middleware,
      userManagementApi.middleware,
      jobManagementApi.middleware,
      jobMatchingApi.middleware,
      settingApi.middleware,
      userApi.middleware,
      disputeManagementApi.middleware
    ),
});

export default store;
