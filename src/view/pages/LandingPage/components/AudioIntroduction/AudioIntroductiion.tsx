import React from 'react'
import { GET_INTRODUCTION_STORIES, GetIntroductionStories } from './schema'
import { useQuery } from '@apollo/client'
import { LANG_LS } from '../../../../../translations'
import { Description, Header } from '../../style'
import { useTranslation } from 'react-i18next'
import { IntroItem } from './IntroItem'
import { ItemsContainer, LoadingContainer } from './style'

function AudioIntroduction() {
  const { t } = useTranslation()
  const language = localStorage.getItem(LANG_LS)
  const { loading, error, data } = useQuery<GetIntroductionStories>(GET_INTRODUCTION_STORIES, {
    variables: {
      language: language?.toUpperCase() || 'PL',
    },
  })

  return (
    <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
      <Header bold>{t('LandingPage.descriptionSection.audioIntroduction.title')}</Header>
      <Description>{t('LandingPage.descriptionSection.audioIntroduction.pickUp')}</Description>
      <div className="flex flex-column flex-md-row justify-content-between">
        {loading ? (
          <LoadingContainer>{t('LandingPage.descriptionSection.audioIntroduction.loading')}</LoadingContainer>
        ) : (
          <ItemsContainer>
            {data?.getIntroductionStories.map(
              ({
                title,
                user: {
                  name,
                  narratorDetails: { title: narratorTitle, photoPath },
                },
                meditations,
              }) => (
                <IntroItem
                  title={title}
                  userName={name}
                  userTitle={narratorTitle}
                  userPhoto={photoPath}
                  audioPath={meditations[0].path}
                />
              )
            )}
          </ItemsContainer>
        )}
      </div>
      <Description center>{t('LandingPage.descriptionSection.audioIntroduction.click')}</Description>
    </div>
  )
}

export default AudioIntroduction
