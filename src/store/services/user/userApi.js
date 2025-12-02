import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.10.13.22:8000" }),
  endpoints: (builder) => ({
    // GET all services for landing page
    getServices: builder.query({
      query: () => "/accounts/get/all/service/list/",
      providesTags: ["Services"],

      //   Other endpoints can be added here
      // getJobMatchingList: builder.query({
      //   query: () => "/dashboard/jobs/matching/list/",
      // }),
      // assignJobToPhlebotomist: builder.mutation({
      //   query: (body) => ({
      //     url: "/dashboard/jobs/matching/phlebotomist/assign/",
      //     method: "POST",
      //     body,
      //   }),
    }),
  }),
});

export const { useGetServicesQuery } = userApi;
