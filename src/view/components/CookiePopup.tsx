import React from 'react'
import CookieBanner from 'react-cookie-banner'
import { useTranslation } from 'react-i18next'

const styles = {
  banner: {
    background: 'rgba(52, 64, 81, 0.88) url(/assets/cookie.png) 20px 50% no-repeat',
    backgroundSize: '30px 30px',
    height: '100%',
    backgroundColor: '',
    fontSize: '15px',
    fontWeight: 600,
  },
  button: {
    border: '1px solid white',
    borderRadius: 4,
    width: 66,
    height: 32,
    lineHeight: '32px',
    background: 'transparent',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    opacity: 1,
    right: 20,
    marginTop: -18,
  },
  message: {
    display: 'block',
    padding: '9px 67px',
    lineHeight: 1.3,
    textAlign: 'left',
    marginRight: 244,
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}

function CookiePopup() {
  const { t } = useTranslation()
  const message =
    'Zencast Ta strona korzysta z plików cookie w celu poprawy jakości Twojego doświadczenia podczas przeglądania. Pliki cookie to małe pliki tekstowe przechowywane na Twoim urządzeniu, które pomagają nam analizować ruch na stronie. Kontynuując korzystanie z naszej witryny, zgadzasz się na wykorzystanie plików cookie.'

  return (
    <div style={{ position: 'fixed', bottom: 0, zIndex: 1000 }}>
      <CookieBanner
        styles={styles}
        message={t('cookie.text')}
        buttonMessage={t('cookie.btn')}
        dismissOnScroll={false}
        dismissOnClick={true}
        onAccept={() => console.log('accept cookie')}
      />
    </div>
  )
}

export default CookiePopup
