import styled from 'styled-components'

export const DoubleCheckComponent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &.waiting {
    transform: scale(1.2);

    circle {
      fill: #e4673d;
    }

    path {
      stroke: #e8bb76;
    }
  }
`
