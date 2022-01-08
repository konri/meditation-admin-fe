import React, { useState } from 'react'
import logo from '@svg/logo.svg'
import logoDarkMode from '@svg/logo-dark-mode.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AppMenu from './Menu'
import { DarkModeToggle } from '../DarkModeToggle'
import { useDispatch, useSelector } from 'react-redux'
import { useDarkMode } from '../../../store/settings/settingsSelectors'
import { toggleDarkMode } from '../../../store/settings/settingsActions'
import LanguageSelector from '@components/header/LanguageSelector'

const StickyContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.headerBackground};
  z-index: 1000;
  -webkit-box-shadow: 0px 8px 20px -11px ${({ theme }) => theme.headerShadowColor};
  -moz-box-shadow: 0px 8px 20px -11px ${({ theme }) => theme.headerShadowColor};
  box-shadow: 0px 8px 20px -11px ${({ theme }) => theme.headerShadowColor};
`

const LogoContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  overflow: hidden;

  img {
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) => (theme.type === 'lightTheme' ? 'translateY(0)' : 'translateY(200px)')};
    }

    &:nth-child(2) {
      transform: ${({ theme }) => (theme.type === 'lightTheme' ? 'translateY(200px)' : 'translateY(-81px)')};
    }
  }
`

export function AppHeader() {
  const checkedDarkMode = useSelector(useDarkMode)
  const dispatch = useDispatch()
  return (
    <StickyContainer className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
      <Link to="/home">
        <LogoContainer>
          <img src={logo} alt="Logo Quietly" width="200" height="150" />
          <img src={logoDarkMode} alt="Logo Quietly" width="200" height="150" />
        </LogoContainer>
      </Link>
      <div className="d-flex flex-row align-items-center pr-2 pr-lg-4">
        <AppMenu />

        <div className="pl-2">
          <LanguageSelector />
        </div>
        <div className="pl-2">
          <DarkModeToggle
            width={50}
            height={25}
            checked={checkedDarkMode}
            onChange={(darkMode) => dispatch(toggleDarkMode(darkMode))}
          />
        </div>
      </div>
    </StickyContainer>
  )
}
