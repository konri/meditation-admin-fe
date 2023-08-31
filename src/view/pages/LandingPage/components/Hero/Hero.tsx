import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import './hero.css'
import { LANG_LS } from '../../../../../translations'
import { APP_STORE, GOOGLE_PLAY } from '../../LandingPage'

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

export const StoreButton = styled.img`
  width: 350px;
  height: 100px;
  margin-bottom: 20px;
`

export const Hero = () => {
  const { t } = useTranslation()
  const lng = localStorage.getItem(LANG_LS)
  console.log('lng', lng)
  return (
    <HeroBackground>
      <img
        className="hero-image-mobile"
        src="/assets/hero_left.png"
        alt="Mobile Image"
        decoding="async"
        loading="lazy"
      />
      <div className="hero-images">
        <img className="hero-image-left" src="/assets/hero_left.png" alt="Left Image" decoding="async" loading="lazy" />
        <div className="hero-content">
          <h1 className="hero-title">{t('LandingPage.hero.title')}</h1>
          <p className="hero-description">{t('LandingPage.hero.desc')}</p>
          <div className="store-logos">
            <a href={APP_STORE}>
              <StoreButton src={`/assets/stores/${lng}/app_store.png`} />
            </a>
            <a href={GOOGLE_PLAY}>
              <StoreButton src={`/assets/stores/${lng}/google_play.png`} />
            </a>
          </div>
        </div>
        <img
          className="hero-image-right"
          src="/assets/hero_right.png"
          alt="Right Image"
          decoding="async"
          loading="lazy"
        />
      </div>
    </HeroBackground>
  )
}
