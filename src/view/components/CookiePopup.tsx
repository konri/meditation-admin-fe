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
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}

function CookiePopup() {
  const { t } = useTranslation()
  return (
    <div style={{ position: 'fixed', bottom: 0, zIndex: 1000 }}>
      <CookieBanner
        styles={styles}
        message={t('cookie.text')}
        buttonMessage={t('cookie.btn')}
        dismissOnScroll={false}
        dismissOnClick
        onAccept={() => console.log('accept cookie')}
      />
    </div>
  )
}

export default CookiePopup
