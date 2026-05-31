import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_TMDB_DOMAIN_ADDRESS,
  headers: {
    'API-KEY': process.env.TMDB_API_KEY ?? '',
  },
});
