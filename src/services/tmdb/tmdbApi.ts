import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const tmdbApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
