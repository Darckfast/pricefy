import React, { useContext } from 'react'
import { ThemeContext } from '../pages/_app'
import { DarkIcon } from '../styles/icons/darkIcon'
import { LightIcon } from '../styles/icons/lightIcon'

export const ToggleTheme: React.FC = () => {
  const { currentTheme, changeTheme } = useContext(ThemeContext)

  return (
    <a className={'toggle-button'} onClick={changeTheme}>
      {currentTheme.name === 'light' ? (
        <DarkIcon></DarkIcon>
      ) : (
        <LightIcon></LightIcon>
      )}
    </a>
  )
}
