import React from 'react'
import CookieBanner from 'react-cookie-banner'

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
  const message =
    "Quietly uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies."

  return (
    <div style={{ position: 'fixed', bottom: 0, zIndex: 1000 }}>
      <CookieBanner
        styles={styles}
        message={message}
        link={<a href="http://nocookielaw.com/">More information on our use of cookies</a>}
        buttonMessage="Close"
        dismissOnScroll={false}
        dismissOnClick={false}
        onAccept={() => console.log('accept cookie')}
      />
    </div>
  )
}

export default CookiePopup
