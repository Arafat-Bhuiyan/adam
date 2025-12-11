import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Patient Management API slice
const baseUrl = import.meta.env.VITE_BASE_URL;

export const patientManagementApi = createApi({
  reducerPath: "patientManagementApi",
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
    getAppointmentsList: builder.query({
      query: () => "/accounts/admin/appointments/view/list/",
    }),
    getAppointmentDetails: builder.query({
      query: (appointmentId) => `/accounts/admin/appointment/${appointmentId}/details/`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAppointmentsListQuery, useGetAppointmentDetailsQuery } = patientManagementApi;
