import { Dropdown } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useCallback } from 'react'
import { LANG_LS } from '../../../translations'

const LanguageSelector = () => {
  const { t } = useTranslation()

  const setLanguage = useCallback((lang: string) => {
    i18next.changeLanguage(lang)
    localStorage.setItem(LANG_LS, lang)
  }, [])
  return (
    <Dropdown text={t('language.title')} icon="world" floating labeled button className="icon">
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setLanguage('pl')}>{t('language.pl')}</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage('en')}>{t('language.en')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSelector
