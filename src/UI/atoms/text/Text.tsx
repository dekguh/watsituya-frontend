import React from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, typography, TypographyProps  } from 'styled-system'

export const TextHeading = styled('h1')<ColorProps & SpaceProps & TypographyProps>(
    color,
    space,
    typography
)

export const TextParagraph = styled('p')<ColorProps & SpaceProps & TypographyProps>(
    color,
    space,
    typography
)