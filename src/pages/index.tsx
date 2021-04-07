import dynamic from 'next/dynamic'

const SearchLayout = dynamic(
  () =>
    import('layouts').then(
      (module) => module.SearchLayout,
      () => null as never
    ),
  { ssr: false }
)

const Home = () => {
  return <SearchLayout />
}

export default Home
