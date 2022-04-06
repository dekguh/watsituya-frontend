import React from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps, layout, LayoutProps, OrderProps, position, PositionProps, space, SpaceProps } from 'styled-system'

const Box = styled('div')<SpaceProps & FlexboxProps & OrderProps & LayoutProps & PositionProps>(
    space,
    flexbox,
    layout,
    position
)

export default Box