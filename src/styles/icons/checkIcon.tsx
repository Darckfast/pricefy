import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  position: relative;

  width: 25px;
  height: 18px;

  fill: none;
  transition: 0.2s;

  path {
    stroke: ${props => props.theme.colors.success};
    stroke-width: 2;

    stroke-dasharray: 32;

    animation: animate 0.3s linear backwards;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: 32;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`

export const CheckIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg className={className}>
    <path d="M1.5 8L9.5 16L16.75 8.75L24 1.5" />
  </Svg>
)
