import { useMemo } from 'react'

import styled from 'styled-components'

import { Flex } from 'components/Flex'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

type EmptyProps = {
  text?: string
  icon?: string
}

const EmptyContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

const EmptyText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`

export const Empty = ({ text, icon }: EmptyProps) => {
  const emptyIcon = useMemo(() => {
    if (!icon) {
      return <Icon name="not-found" width="250" height="250" viewBox="0 0 512 512" />
    }

    return icon
  }, [icon])

  return (
    <EmptyContainer>
      {emptyIcon}

      <EmptyText>{text}</EmptyText>
    </EmptyContainer>
  )
}

Empty.defaultProps = {
  text: 'Not found'
}
