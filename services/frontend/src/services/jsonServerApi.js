import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://redux-toolkit.js.org/rtk-query/usage/queries
export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_SERVER,
  }),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Artists'],
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: (artist) => ({
        url: `/api/music/search/${artist}`,
      })
    }),
    getArtistInfo: builder.query({
      query: (artist_id) => ({
        url: `/api/music/search/artist/${artist_id}`
      })
    })
  }),
});

export const { useGetArtistsQuery, useGetArtistInfoQuery } = jsonServerApi;