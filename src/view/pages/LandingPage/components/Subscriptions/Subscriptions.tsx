import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

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
  -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 2040 994" xmlns="http://www.w3.org/2000/svg"><path d="M2039.12 943.062C1516.62 943.062 1395.62 755.458 1002.38 755.458C694.375 755.458 374 993.24 0 993.24C0 828.271 0 496.96 0 496.96H2039.12C2039.12 496.96 2039.12 596.628 2039.12 943.062Z M2039.12 50.8967C1516.62 50.8967 1240.75 238.719 847.5 238.719C539.5 238.719 374 0.71875 0 0.71875C0 165.687 0 496.999 0 496.999H2039.12C2039.12 496.999 2039.12 397.33 2039.12 50.8967Z" /></svg>')
    center/contain no-repeat;
  mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 2040 994" xmlns="http://www.w3.org/2000/svg"><path d="M2039.12 943.062C1516.62 943.062 1395.62 755.458 1002.38 755.458C694.375 755.458 374 993.24 0 993.24C0 828.271 0 496.96 0 496.96H2039.12C2039.12 496.96 2039.12 596.628 2039.12 943.062Z M2039.12 50.8967C1516.62 50.8967 1240.75 238.719 847.5 238.719C539.5 238.719 374 0.71875 0 0.71875C0 165.687 0 496.999 0 496.999H2039.12C2039.12 496.999 2039.12 397.33 2039.12 50.8967Z" /></svg>')
    center/contain no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 100%;
  -webkit-background-position: center;
  background-position: center;
  padding: 60px 0;
`

export const Subscriptions = () => {
  const { t } = useTranslation()

  return (
    <HeroBackground>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            {t('LandingPage.Subscription.title')}
          </h2>
        </div>
        <div className=""></div>
      </div>
    </HeroBackground>
  )
}
