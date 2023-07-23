/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface DataResp {
  amount_of_clicks: number;
  deleted_time: Date | number;
  id: number;
  is_active: number;
  long_url: string;
  retrieved_time: Date | number;
  short_url: string;
}

type PostsResponse = DataResp[];
type CreateResponse = DataResp | string;



export const apiSlice:any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["info"],
  endpoints: (builder) => ({
    getUrls: builder.query<PostsResponse, void>({
      query: () => "/api/url/get-created",
      providesTags: ["info"],
    }),
    deleteShortUrl: builder.mutation<CreateResponse, string>({
      query: (shortUrl) => ({
        url: `/api/url/${shortUrl}/delete`, 
        method: "PUT",
      }),
      invalidatesTags: ["info"],
    }),
    restoreShortUrl: builder.mutation<CreateResponse, string>({
      query: (shortUrl) => ({
        url: `/api/url/${shortUrl}/restore`,
        method: "PUT",
      }),
      invalidatesTags: ["info"],
    }),
    redirectShortUrl: builder.mutation<PostsResponse, string>({
      query: (shortUrl) => ({
        url: `/me.li/${shortUrl}`,
        method: "GET",
      }),
      invalidatesTags: ["info"],
    }),
    getInactiveShortUrl: builder.query<PostsResponse, string>({
      query: () => ({
        url: `/api/url/get-amount-actives`,
        method: "GET",
        invalidatesTags: ["info"],
      }),
    }),
    getActiveShortUrl: builder.query<PostsResponse, string>({
      query: () => ({
        url: `/api/url/get-amount-inactives`,
        method: "GET",
        invalidatesTags: ["info"],
      }),
    }),
    getAllShortUrl: builder.query<PostsResponse, string>({
      query: () => ({
        url: `/api/url/get-amount-created`,
        method: "GET",
        invalidatesTags: ["info"],
      }),
    }),
    createShortUrl: builder.mutation<CreateResponse, string>({
      query: (longUrl) => ({
        url: `/api/url/create-short-url`,
        method:'POST',
        body:{
          long_url:longUrl,
        }
      }),
      invalidatesTags: ["info"],
    }),
  }),
});
export const {
  useGetUrlsQuery,
  useDeleteShortUrlMutation,
  useCreateShortUrlMutation,
  useRedirectShortUrlMutation,
  useRestoreShortUrlMutation,
 useGetActiveShortUrlQuery,
 useGetInactiveShortUrlQuery,
 useGetAllShortUrlQuery,

} = apiSlice;
