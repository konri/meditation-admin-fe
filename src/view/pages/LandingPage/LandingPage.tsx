import React from 'react'
import { useTranslation } from 'react-i18next'
import { Hero, StoreButton } from './components/Hero/Hero'
import { ContainerWithImage } from './components/ContainerWithImage/ContainerWithImage'
import Testimonials from './components/Testimonial/Testimonial'
import PeopleStory from './components/People/PeopleStory'
import { Description, Header } from './style'
import { LANG_LS } from '../../../translations'
import { team } from './team'
import { Rating } from './components/rating/rating'
import { Lectors } from './components/Lectors/Lectors'
import AudioIntroduction from './components/AudioIntroduction/AudioIntroductiion'
import ZencastShow from './components/ZencastShow/ZencastShow'

export const APP_STORE =
  'https://apps.apple.com/pl/app/medystacja-medytacja-rozw%C3%B3j/id1628606900?l=pl&platform=iphone&fbclid=IwAR1xWhxFyn0iWYI1fSwcvwiOWwHatnVACdTJwTlnYgze58CTinYh9fnty34'
export const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.konradhopek.medystacja&pli=1'

export const LandingPage = () => {
  const { t } = useTranslation()
  const lng = localStorage.getItem(LANG_LS) || 'pl'
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 whitespace-pre-line	">
      <Hero />

      <ContainerWithImage leftImagePath="/assets/feeling.png" mobileImagePath="/assets/feeling.png">
        <Header bold end>
          {t('LandingPage.descriptionSection.feeling.title')}
        </Header>
        <Description end>{t('LandingPage.descriptionSection.feeling.desc')}</Description>
      </ContainerWithImage>

      <ContainerWithImage rightImagePath="/assets/sleep.png" mobileImagePath="/assets/sleep.png">
        <Header bold>{t('LandingPage.descriptionSection.sleep.title')}</Header>
        <Description>{t('LandingPage.descriptionSection.sleep.desc')}</Description>
      </ContainerWithImage>

      <ContainerWithImage leftImagePath="/assets/teach.png" mobileImagePath="/assets/teach.png">
        <Header bold>{t('LandingPage.descriptionSection.teach.title')}</Header>
        <Description>{t('LandingPage.descriptionSection.teach.desc')}</Description>
      </ContainerWithImage>

      <ContainerWithImage rightImagePath="/assets/people.png" mobileImagePath="/assets/people.png">
        <Header bold>{t('LandingPage.descriptionSection.people.title')}</Header>
        <Description mb>{t('LandingPage.descriptionSection.people.desc')}</Description>
        <Description>{t('LandingPage.descriptionSection.people.desc2')}</Description>
      </ContainerWithImage>

      <ContainerWithImage leftImagePath="/assets/category.png" mobileImagePath="/assets/category.png">
        <Header end bold>
          {t('LandingPage.descriptionSection.category.title')}
        </Header>
        <Description end>{t('LandingPage.descriptionSection.category.desc')}</Description>
      </ContainerWithImage>

      <ZencastShow />

      <ContainerWithImage rightImagePath="/assets/images-in-phone.png" mobileImagePath="/assets/images-in-phone.png">
        <Header bold>{t('LandingPage.descriptionSection.why.title')}</Header>
        <Description mb>{t('LandingPage.descriptionSection.why.desc')}</Description>
        <Description mb>{t('LandingPage.descriptionSection.why.desc2')}</Description>
        <Description>{t('LandingPage.descriptionSection.why.desc3')}</Description>
      </ContainerWithImage>

      <ContainerWithImage
        leftImagePath="/assets/estimations.png"
        rightImagePath="/assets/mood-check.png"
        mobileImagePath="/assets/mood-check.png"
      >
        <Header bold center>
          {t('LandingPage.descriptionSection.tryAndDownload.title')}
        </Header>
        <Description big center>
          {t('LandingPage.descriptionSection.tryAndDownload.desc')}
        </Description>
        <div className="store-logos mt-2">
          <a href={APP_STORE}>
            <StoreButton src={`/assets/stores/${lng}/app_store.png`} />
          </a>
          <a href={GOOGLE_PLAY}>
            <StoreButton src={`/assets/stores/${lng}/google_play.png`} />
          </a>
        </div>
      </ContainerWithImage>

      <AudioIntroduction />

      <Lectors />

      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('LandingPage.descriptionSection.power.title')}</Header>
        <div className="flex flex-column flex-md-row justify-content-between w-100">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <Description mb>{t('LandingPage.descriptionSection.power.left1')}</Description>
            <Description>{t('LandingPage.descriptionSection.power.left2')}</Description>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <Description mb end>
              {t('LandingPage.descriptionSection.power.right1')}
            </Description>
            <Description end>{t('LandingPage.descriptionSection.power.right2')}</Description>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('LandingPage.descriptionSection.rating.title')}</Header>
        <Header bold className="-mt-10">
          {t('LandingPage.descriptionSection.rating.title2')}
        </Header>

        <div className="flex flex-column flex-md-row justify-content-between">
          <div className="md:w-50 md:pr-4">
            <div className="flex-column justify-content-center align-items-center">
              <Rating rate={4.6} />
              <a href={GOOGLE_PLAY}>
                <StoreButton src={`/assets/stores/${lng}/google_play.png`} className="mt-4" />
              </a>
            </div>
          </div>
          <div className="md:w-50 md:pl-4">
            <Rating rate={4.9} />
            <a href={APP_STORE}>
              <StoreButton src={`/assets/stores/${lng}/app_store.png`} className="mt-4" />
            </a>
          </div>
        </div>
      </div>

      <Testimonials />

      <PeopleStory team={team} title="LandingPage.PeopleStory.title" />

      <ContainerWithImage
        leftImagePath="/assets/gratitude.png"
        rightImagePath="/assets/breath.png"
        mobileImagePath="/assets/gratitude.png"
      >
        <Header bold center>
          {t('LandingPage.descriptionSection.tryAndDownload.title')}
        </Header>
        <div className="store-logos mt-2">
          <a href={APP_STORE}>
            <StoreButton src={`/assets/stores/${lng}/app_store.png`} />
          </a>
          <a href={GOOGLE_PLAY}>
            <StoreButton src={`/assets/stores/${lng}/google_play.png`} />
          </a>
        </div>
      </ContainerWithImage>

      {/*<FaqSection />*/}

      {/*<Subscriptions />*/}
    </div>
  )
}
