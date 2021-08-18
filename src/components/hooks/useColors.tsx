import { useState } from 'react'

export const useColors = (): [Generator<string, void, unknown>] => {
  const [colors, setColors] = useState([
    '#BA68C8',
    '#E91E63',
    '#42A5F5',
    '#E57373',
    '#7158e2',
    '#3ae374',
    '#4DD0E1',
    '#ff9f1a',
    '#cd84f1'
  ])

  function* getColor() {
    while (true) {
      const nextColor = colors.shift()

      colors.push(nextColor)
      setColors(colors)

      yield nextColor
    }
  }

  return [getColor()]
}
