import { MovieLayout, MovieLayoutProps } from 'layouts'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { queryMovieById, queryMoviesBySearch } from 'services/movies'

const Movie = ({ movie }: MovieLayoutProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  return <MovieLayout movie={movie} />
}

export const getStaticPaths = async () => {
  const { Search: movies } = await queryMoviesBySearch('star wars')

  const paths = movies?.map(({ imdbID }) => ({
    params: {
      slug: imdbID
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movie = await queryMovieById(`${params?.slug}`)

  return {
    revalidate: 60,
    props: { movie }
  }
}
export default Movie
