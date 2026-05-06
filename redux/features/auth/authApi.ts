import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/api/job_seeker/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    verifyPhone: builder.mutation({
      query: (verifyInfo) => ({
        url: "/api/job_seeker/phone_verify",
        method: "POST",
        body: verifyInfo,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/job_seeker/login",
        method: "POST",
        body: credentials,
      }),
    }),

    forgetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "auth/password-reset/request/",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyPhoneMutation,
  useLoginMutation,
  useForgetPasswordMutation,
} = authApi;
