import { tmdbApi } from '../tmdbApi';

export const moviesApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => '/movie/popular',
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;
