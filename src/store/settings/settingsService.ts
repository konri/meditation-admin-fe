import { SettingsState } from './model/SettingsState'

const darkModeKey = 'DARK_MODE'

export function saveDarkMode(mode: boolean) {
  localStorage.setItem(darkModeKey, JSON.stringify(mode))
}

export function getDarkMode() {
  return JSON.parse(localStorage.getItem(darkModeKey) || 'false')
}

export function getSettingsInitialState(): SettingsState {
  return {
    darkMode: getDarkMode(),
  }
}
