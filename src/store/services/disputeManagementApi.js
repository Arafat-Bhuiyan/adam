import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sub } from "date-fns";

// Job Management API slice
const baseUrl = import.meta.env.VITE_BASE_URL;

export const disputeManagementApi = createApi({
  reducerPath: "disputeManagementApi",
  tagTypes: ["Disputes"],
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
    // GET all reports lists for admin dispute management
    getReportsList: builder.query({
      query: () => "/accounts/admin/reports/list/",
      providesTags: ["Reports"],
    }),

    // GET report details by ID
    getReportDetails: builder.query({
      query: (reportId) => `/accounts/admin/reports/${reportId}/`,
      providesTags: ["Reports"],
    }),

    // POST - Send Summary To Both Parties
    submitReportSummary: builder.mutation({
      query: ({ reportId, ...body }) => ({
        url: `/accounts/admin/report/${reportId}/send-message/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reports"],
    }),

    // POST - Do Action Against Reported User
    takeReportAction: builder.mutation({
      query: ({ reportId, actionType, ...body }) => ({
        url: `/accounts/admin/report/${reportId}/action/${actionType}/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reports"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetReportsListQuery,
  useGetReportDetailsQuery,
  useSubmitReportSummaryMutation,
  useTakeReportActionMutation,
} = disputeManagementApi;
