import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppRouter from '../../router/AppRouter'
import GlobalStyles from '../../../style/globalStyle'
import { darkTheme, lightTheme } from '../../../style/styleThemeVariables'

import { useSelector } from 'react-redux'
import { useDarkMode } from '../../../store/settings/settingsSelectors'
import CookiePopup from '../../components/CookiePopup'

function App() {
  const darkMode = useSelector(useDarkMode)
  return (
    <ThemeProvider theme={() => (darkMode ? darkTheme : lightTheme)}>
      <GlobalStyles />
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        limit={6}
        pauseOnHover
      />
      <CookiePopup />
    </ThemeProvider>
  )
}

export default App
