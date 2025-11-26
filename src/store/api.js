import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Example API slice using RTK Query. Update `baseUrl` and endpoints as needed.
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    // Add more endpoints here
  }),
});

// Export hooks for usage in functional components
export const { useGetUsersQuery } = api;
