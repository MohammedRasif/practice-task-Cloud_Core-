import { baseApi } from "../../api/baseApi";

export interface Industry {
  id: number;
  priority: number;
  name: string;
  is_active: number;
  image: string;
  jobs_count: number;
}

export interface Company {
  id: number;
  name: string;
  is_active: number;
  slug: string;
  image: string;
  jobs_count: number;
}

export interface Job {
  id: number;
  company_id: number;
  category_id: number;
  country_id: number;
  industry_id: number;
  job_title: string;
  slug: string;
  priority: number;
  company_name: string;
  industry_name: string;
  is_active: number;
  salary_type: string;
  currency: string;
  min_salary: number;
  max_salary: number;
  employment_type: string;
  gender: string;
  min_age: number;
  max_age: number;
  vacancy: number;
  experience: string;
  expiry: string;
  job_collar: string;
  company: {
    id: number;
    name: string;
    slug: string;
    image: string;
    industry_name: string;
    country_name: string;
  };
  country: {
    id: number;
    name: string;
  };
}

interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIndustries: builder.query<ApiResponse<Industry[]>, void>({
      query: () => "/api/industry/get",
    }),
    getJobs: builder.query<ApiResponse<Job[]>, void>({
      query: () => "/api/job/get",
    }),
    getCompanies: builder.query<ApiResponse<Company[]>, void>({
      query: () => "/api/company/get",
    }),
  }),
});

export const {
  useGetIndustriesQuery,
  useGetJobsQuery,
  useGetCompaniesQuery,
} = homeApi;
