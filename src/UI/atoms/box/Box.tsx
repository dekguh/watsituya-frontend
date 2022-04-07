import React from 'react'
import styled from 'styled-components'
import { background, BackgroundProps, flexbox, FlexboxProps, layout, LayoutProps, OrderProps, position, PositionProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

const Box = styled('div')<SpaceProps & FlexboxProps & OrderProps & LayoutProps & PositionProps & BackgroundProps & TypographyProps>(
    space,
    flexbox,
    layout,
    position,
    background,
    typography
)

export default Box