import useSWR from 'swr'

import { get } from './request'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

type QueryMovieType = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

type MoviesBySearch = {
  Error?: string
  Response: boolean
  Search?: [QueryMovieType]
  totalResults?: string
}

type QueryMoviesBySearch = {
  data: MoviesBySearch | undefined
  isLoading: boolean
  mutate: () => void
}

export const queryMoviesBySearch = async (title: string): Promise<MoviesBySearch> => {
  const { data } = await get(`?apikey=${API_KEY}&type=movie&plot=full&r=json&s=${title}`)

  return data
}

export const useQueryMoviesBySearch = (title: string, config = {}): QueryMoviesBySearch => {
  const { data, error, mutate, isValidating } = useSWR<MoviesBySearch>(
    `?apikey=${API_KEY}&type=movie&r=json&s=${title}`,
    {
      ...config
    }
  )

  return {
    data,
    isLoading: (!error && !data) || isValidating,
    mutate
  }
}

type MovieRating = {
  Source: string
  Value: string
}

export type MoviesDetails = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: [MovieRating]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

type QueryMovieById = {
  data: MoviesDetails | undefined
  isLoading: boolean
  mutate: () => void
}

export const queryMovieById = async (id: string): Promise<MoviesDetails> => {
  const { data } = await get(`?apikey=${API_KEY}&type=movie&r=json&i=${id}`)

  return data
}

export const useQueryMovieById = (id: string, config = {}): QueryMovieById => {
  const { data, error, mutate, isValidating } = useSWR<MoviesDetails>(`?apikey=${API_KEY}&type=movie&r=json&i=${id}`, {
    ...config
  })

  return {
    data,
    isLoading: (!error && !data) || isValidating,
    mutate
  }
}
