import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";

export const appApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
});
