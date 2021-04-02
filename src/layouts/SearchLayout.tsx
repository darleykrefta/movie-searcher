import { useState } from 'react'

import { useQueryMoviesBySearch } from 'services/useQueryMovies'

import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { Empty } from 'components/Empty'
import { Col, Grid, Row } from 'components/Grid'
import { InputTextSearch } from 'components/InputTextSearch'

export const SearchLayout = () => {
  const [search, setSearch] = useState<string>('')

  const { data } = useQueryMoviesBySearch(search)

  return (
    <Box marginX={[4, 5, 6, 7]}>
      <Grid>
        <Row marginY={3}>
          <Col span={1}>
            <InputTextSearch name="search-movie" placeholder="Search movies..." resultSearch={setSearch} />
          </Col>
        </Row>

        <Row flexWrap="wrap">
          {data?.Error ? (
            <Col span={1} justifyContent="center" marginY={6}>
              <Empty text={data.Error} />
            </Col>
          ) : null}

          {data?.Search?.map(({ imdbID, Title, Year, Poster }) => (
            <Col key={imdbID} span={1} marginY={3} justifyContent="center">
              <Card title={Title} description={Year} backgroundImage={Poster !== 'N/A' ? Poster : ''} />
            </Col>
          ))}
        </Row>
      </Grid>
    </Box>
  )
}
