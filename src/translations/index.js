import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'

export const LANG_LS = 'CURRENT_LANGUAGE'
const lng = localStorage.getItem(LANG_LS)
if (lng == null) {
  localStorage.setItem(LANG_LS, 'pl')
}
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
  lng: lng || 'pl',
})

export default i18n
