import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

const Image = styled('img')<LayoutProps & SpaceProps & HTMLProps<HTMLImageElement>>(
    layout,
    space
)

export default Image