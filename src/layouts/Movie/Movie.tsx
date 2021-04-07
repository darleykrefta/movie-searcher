import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MoviesDetails } from 'services/movies'
import { useTheme } from 'styled-components'

import { Badge } from 'components/Badge'
import { BadgeIcon } from 'components/BadgeIcon'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { ButtonIcon } from 'components/ButtonIcon'
import { Col, Grid, Row } from 'components/Grid'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

export type MovieLayoutProps = {
  movie: MoviesDetails
}

export const MovieLayout = ({ movie }: MovieLayoutProps) => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <>
      <NextSeo title={`${movie.Title} - Movie Searcher`} description={movie.Plot} />

      <Grid marginX={[0, 5, 6, 7]} marginY={4}>
        <Row>
          <Col>
            <ButtonIcon icon={<Icon name="arrow-default" />} onClick={() => router.push(`/`)} />
          </Col>
        </Row>

        <Grid marginX={[2, 4]}>
          <Row marginY={4} flexWrap="wrap-reverse">
            <Col span={1}>
              <Grid>
                <Row marginY={[2, 4]}>
                  <Col span={1} justifyContent={['center', 'flex-start']}>
                    <Text color={theme.colors.lightgrey} fontSize="24px" fontWeight="bold">
                      {movie.Runtime} &middot; {movie.Year}
                    </Text>

                    <Box marginLeft="10px">
                      <Badge text={movie.Rated} />
                    </Box>
                  </Col>
                </Row>

                <Row marginY={[2, 4]}>
                  <Col span={1}>
                    <Text
                      color={theme.colors.white}
                      fontSize="56px"
                      fontWeight="bold"
                      textAlign={['center', 'justify']}
                    >
                      {movie.Title}
                    </Text>
                  </Col>
                </Row>

                <Row marginY={[2, 4]}>
                  <Col span={1} justifyContent="space-between">
                    <BadgeIcon
                      text={`${movie.imdbRating}/10`}
                      icon={<Icon width="35px" height="16px" viewBox="0 0 35 16" name="imdb-logo" />}
                      backgroundColorIcon={theme.colors.yellow}
                    />

                    <BadgeIcon
                      text={movie?.Metascore}
                      icon={<Icon width="24px" height="24px" viewBox="0 0 16 16" name="rotten-tomatoes" />}
                      backgroundColorIcon={theme.colors.red}
                    />

                    <Button leftIcon={<Icon name="heart-default" />}>Add to favourites</Button>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Text color={theme.colors.lightgrey} fontSize="18px">
                      Plot
                    </Text>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Text color={theme.colors.white} fontSize="18px">
                      {movie.Plot}
                    </Text>
                  </Col>
                </Row>

                <Row marginTop={[2, 4]}>
                  <Col span={2}>
                    <Text color={theme.colors.lightgrey} fontSize="18px">
                      Cast
                    </Text>
                  </Col>

                  <Col span={1}>
                    <Text color={theme.colors.lightgrey} fontSize="18px">
                      Genre
                    </Text>
                  </Col>

                  <Col span={1}>
                    <Text color={theme.colors.lightgrey} fontSize="18px">
                      Director
                    </Text>
                  </Col>
                </Row>

                <Row marginTop={2}>
                  <Col span={2}>
                    <Text color={theme.colors.white} fontSize="18px">
                      {movie.Actors}
                    </Text>
                  </Col>

                  <Col span={1}>
                    <Text color={theme.colors.white} fontSize="18px">
                      {movie.Genre}
                    </Text>
                  </Col>

                  <Col span={1}>
                    <Text color={theme.colors.white} fontSize="18px">
                      {movie.Director}
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </Col>

            <Col span={1} justifyContent="center">
              <Box position="relative" width="350px" height="500px">
                <Image alt="Mountains" src={movie.Poster} layout="fill" objectFit="contain" />
              </Box>
            </Col>
          </Row>
        </Grid>
      </Grid>
    </>
  )
}
