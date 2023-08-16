import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import './hero.css'

const HeroBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  background-size: cover;
  color: #413d45;
  text-align: center;
  background-color: #ffe7d9;
  -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1980 988" xmlns="http://www.w3.org/2000/svg"><path d="M1980 0H0V973.694C72.7452 982.443 142.016 988 274.407 988C378.525 988 462.973 966.344 555.5 958C656.802 948.861 763.864 944.785 900.5 944.785C1048.76 944.785 1158.83 960.677 1251.43 967.351C1322.12 972.449 1384.45 976.939 1450.42 976.939C1575.31 976.939 1688.82 968.951 1773.14 963.014C1791.7 961.709 1808.84 960.504 1824.38 959.501C1895.22 954.942 1943.42 949.814 1980 944.785V0Z" /></svg>')
    center/contain no-repeat;
  mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1980 988" xmlns="http://www.w3.org/2000/svg"><path d="M1980 0H0V973.694C72.7452 982.443 142.016 988 274.407 988C378.525 988 462.973 966.344 555.5 958C656.802 948.861 763.864 944.785 900.5 944.785C1048.76 944.785 1158.83 960.677 1251.43 967.351C1322.12 972.449 1384.45 976.939 1450.42 976.939C1575.31 976.939 1688.82 968.951 1773.14 963.014C1791.7 961.709 1808.84 960.504 1824.38 959.501C1895.22 954.942 1943.42 949.814 1980 944.785V0Z" /></svg>')
    center/contain no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 100%;
  -webkit-background-position: center;
  background-position: center;
`

//
// const HeroBackground = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
//
//   background-size: cover;
//   color: #413D45;
//   text-align: center;
//   background-color: #FFE7D9;
//   -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 2040 994" xmlns="http://www.w3.org/2000/svg"><path d="M2039.12 943.062C1516.62 943.062 1395.62 755.458 1002.38 755.458C694.375 755.458 374 993.24 0 993.24C0 828.271 0 496.96 0 496.96H2039.12C2039.12 496.96 2039.12 596.628 2039.12 943.062Z M2039.12 50.8967C1516.62 50.8967 1240.75 238.719 847.5 238.719C539.5 238.719 374 0.71875 0 0.71875C0 165.687 0 496.999 0 496.999H2039.12C2039.12 496.999 2039.12 397.33 2039.12 50.8967Z" /></svg>') center/contain no-repeat;
//   mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 2040 994" xmlns="http://www.w3.org/2000/svg"><path d="M2039.12 943.062C1516.62 943.062 1395.62 755.458 1002.38 755.458C694.375 755.458 374 993.24 0 993.24C0 828.271 0 496.96 0 496.96H2039.12C2039.12 496.96 2039.12 596.628 2039.12 943.062Z M2039.12 50.8967C1516.62 50.8967 1240.75 238.719 847.5 238.719C539.5 238.719 374 0.71875 0 0.71875C0 165.687 0 496.999 0 496.999H2039.12C2039.12 496.999 2039.12 397.33 2039.12 50.8967Z" /></svg>') center/contain no-repeat;
//   -webkit-mask-size: cover;
//   mask-size: cover;
//   width: 100%;
//   -webkit-background-position: center;
//   background-position: center;
// `

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <HeroBackground>
      <img
        className="hero-image-mobile"
        src="https://images.ctfassets.net/v3n26e09qg2r/4NqNkoUd0hvoIvsRJrm2bS/50490f004b2a68e044e305e25c0da38a/Hero_Mobile_Image.webp?w=1192&h=992&q=80&fm=webp"
        alt="Mobile Image"
        decoding="async"
        loading="lazy"
      />
      <div className="hero-images">
        <img
          className="hero-image-left"
          src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?w=1052&h=1246&q=80&fm=webp"
          alt="Left Image"
          decoding="async"
          loading="lazy"
        />
        <div className="hero-content">
          <h1 className="hero-title">{t('LandingPage.hero.title')}</h1>
          <p className="hero-description">{t('LandingPage.hero.desc')}</p>
          <p className="hero-description">{t('LandingPage.hero.desc2')}</p>
        </div>
        <img
          className="hero-image-right"
          src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?w=1052&h=1246&q=80&fm=webp"
          alt="Right Image"
          decoding="async"
          loading="lazy"
        />
      </div>
    </HeroBackground>
  )
}
