import { Store } from '../rootReducer'

export const useDarkMode = (state: Store) => state.settings.darkMode
