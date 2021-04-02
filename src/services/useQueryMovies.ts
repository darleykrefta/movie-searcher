import useSWR from 'swr'

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

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

export const useQueryMoviesBySearch = (title: string, config = {}): QueryMoviesBySearch => {
  const { data, error, mutate, isValidating } = useSWR<MoviesBySearch>(
    `${API_URL}?apikey=${API_KEY}&type=movie&r=json&s=${title}=`,
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
