import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseCatalog } from "../../interfaces/backend";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://appevent.ru/dev/task1" }),
  endpoints: (builder) => ({
    getCatalogItems: builder.query<ResponseCatalog, void>({
      query: () => ({
        url: "/catalog",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCatalogItemsQuery, useLazyGetCatalogItemsQuery } = mainApi;
