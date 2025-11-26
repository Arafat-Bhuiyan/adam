import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Dashboard API slice
const baseUrl = "http://10.10.13.22:8000";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      
      if ( getState().auth.token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => "/dashboard/data/",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetDashboardDataQuery } = dashboardApi;
