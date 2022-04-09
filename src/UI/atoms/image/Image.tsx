import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, position, PositionProps, space, SpaceProps } from 'styled-system'

const Image = styled('img')<LayoutProps & PositionProps & SpaceProps & HTMLProps<HTMLImageElement>>(
    layout,
    space,
    position
)

export default Image