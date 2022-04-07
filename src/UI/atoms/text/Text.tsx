import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { background, BackgroundProps, color, ColorProps, space, SpaceProps, typography, TypographyProps  } from 'styled-system'

export const TextHeading = styled('h1')<ColorProps & SpaceProps & TypographyProps & BackgroundProps & HTMLProps<HTMLHeadingElement>>(
    color,
    space,
    typography,
    background
)

export const TextParagraph = styled('p')<ColorProps & SpaceProps & TypographyProps & BackgroundProps & HTMLProps<HTMLParagraphElement>>(
    color,
    space,
    typography,
    background
)

export const TextSpan = styled('span')<ColorProps & SpaceProps & TypographyProps & BackgroundProps & HTMLProps<HTMLSpanElement>>(
    color,
    space,
    typography,
    background
)