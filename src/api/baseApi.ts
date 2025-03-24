import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_PATHS } from "@shared/constants";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_PATHS.ROOT,
    }),
    endpoints: () => ({}),
});