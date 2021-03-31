import { Box } from 'components/Box'

import icons from './icons'

type IconProps = {
  width?: string
  height?: string
  viewBox?: string
  name: keyof typeof icons
}

export const Icon = ({ width, height, viewBox, name, ...props }: IconProps) => {
  const icon = icons[name] || {}

  return (
    <Box as="svg" width={width} height={height} viewBox={viewBox} {...props}>
      {icon.path}
    </Box>
  )
}

Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
}
