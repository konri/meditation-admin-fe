import React, { useEffect } from 'react'
import { Description, Header } from '../../style'
import { useTranslation } from 'react-i18next'
import ZencastAnimation from '@svg/animations/intro-mind.json'
import lottie from 'lottie-web'
import styled from 'styled-components'

const AnimationContainer = styled.div`
  width: 500px;
  height: 500px;
`
function ZencastShow() {
  const { t } = useTranslation()
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#zencast-animation')!,
      animationData: ZencastAnimation,
      renderer: 'canvas', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    })
  }, [])
  return (
    <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
      <Header bold center>
        {t('LandingPage.descriptionSection.body_emotion.title')}
      </Header>
      <div className="flex flex-column align-items-center justify-content-between">
        <AnimationContainer id="zencast-animation"></AnimationContainer>
        <div className="md:w-50 md:pl-4">
          <Description center>{t('LandingPage.descriptionSection.body_emotion.desc')}</Description>
        </div>
      </div>
    </div>
  )
}

export default ZencastShow
