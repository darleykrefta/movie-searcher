import { useState } from 'react'

import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useQueryMoviesBySearch } from 'services/movies'
import { useTheme } from 'styled-components'

import { Card } from 'components/Card'
import { Empty } from 'components/Empty'
import { Col, Grid, Row } from 'components/Grid'
import { Icon } from 'components/Icon'
import { InputTextSearch } from 'components/InputTextSearch'
import { Text } from 'components/Text'

export const SearchLayout = () => {
  const theme = useTheme()

  const router = useRouter()

  const [search, setSearch] = useState<string>('')

  const { data, isLoading } = useQueryMoviesBySearch(search)

  return (
    <>
      <NextSeo title="Movie Searcher" description="An app to easier search movies" />

      <Grid marginX={[4, 5, 6, 7]}>
        <Row marginY={3}>
          <Col span={1} alignItems="center">
            <Icon name="movie-searcher" width="60" height="60" viewBox="0 0 512 512" />
            <Text color={theme.colors.lightgrey} fontSize="32px" marginLeft="10px" fontWeight="bold">
              Movie Searcher
            </Text>
          </Col>
        </Row>

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
    </>
  )
}
