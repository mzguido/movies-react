import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesResponse } from "../../interfaces/movies";

const headers = {
  "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  "X-RapidAPI-Key": "344a52a5acmshf271873750f8bf9p108962jsnb8287cbbb29c",
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-movie-database.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<MoviesResponse, string>({
      query: (title) => ({
        url: `/title/find?q=${title}&type=movie`,
        method: "GET",
        headers: headers,
      }),
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
