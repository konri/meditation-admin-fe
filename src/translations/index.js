import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'

export const LANG_LS = 'CURRENT_LANGUAGE'
const lng = localStorage.getItem(LANG_LS) || 'en'

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng,
})

export default i18n
