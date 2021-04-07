import { useState } from 'react'

import { useRouter } from 'next/router'
import { useQueryMoviesBySearch } from 'services/movies'

import { Card } from 'components/Card'
import { Empty } from 'components/Empty'
import { Col, Grid, Row } from 'components/Grid'
import { InputTextSearch } from 'components/InputTextSearch'

export const SearchLayout = () => {
  const router = useRouter()

  const [search, setSearch] = useState<string>('')

  const { data, isLoading } = useQueryMoviesBySearch(search)

  return (
    <Grid marginX={[4, 5, 6, 7]}>
      <Row marginY={3}>
        <Col span={1}>
          <InputTextSearch
            name="search-movie"
            placeholder="Search movies..."
            isLoading={isLoading}
            resultSearch={setSearch}
          />
        </Col>
      </Row>

      <Row flexWrap="wrap">
        {!data?.Search?.length ? (
          <Col span={1} justifyContent="center" marginY={6}>
            <Empty />
          </Col>
        ) : null}

        {data?.Search?.map(({ imdbID, Title, Year, Poster }) => (
          <Col key={imdbID} span={1} marginY={3} justifyContent="center">
            <Card
              title={Title}
              description={Year}
              backgroundImage={Poster !== 'N/A' ? Poster : ''}
              handleClick={() => router.push(`/movie/${imdbID}`)}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  )
}
