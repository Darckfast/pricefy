import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  position: relative;

  width: 16px;
  height: 16px;

  circle {
    fill: #f74d6c;
  }

  path {
    stroke-width: 2;
    stroke: #f091a2;
  }
`

export const RemoveIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg className={className}>
    <circle cx="8" cy="8" r="8" />
    <path d="M3.5 3.5L12.5 12.5M3.5 12.5L12.5 3.5" />
  </Svg>
)
