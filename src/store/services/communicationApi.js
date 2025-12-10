import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Communication & Reviews API slice
const baseUrl = import.meta.env.VITE_BASE_URL;

export const communicationApi = createApi({
  reducerPath: "communicationApi",
  tagTypes: ["Communication"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      let token = getState()?.auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Get Report Message List
    getInappropriateMessages: builder.query({
      query: () => "/communication/admin/reports/inappropriate/",
      providesTags: ["InappropriateMessages"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetInappropriateMessagesQuery } = communicationApi;
