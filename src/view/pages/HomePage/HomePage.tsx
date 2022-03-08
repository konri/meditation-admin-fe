import React from 'react'
import { Title } from '../../components/styled-components/Title'
import addStory from '@svg/add_story.svg'
import editStory from '@svg/edit_stories.svg'
import narratorDetails from '@svg/narrator-details.svg'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const ImageContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #ececec;
  }
`

const CardDescription = styled.div`
  min-height: 45px;
  color: rgba(0, 0, 0, 0.85);
`

const imageStyle = { maxHeight: '300px' }
export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 mt-4">
      <Title>{t('HomePage.title')}</Title>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5">
        <Card.Group>
          <Link to={'/create-story'} className="p-2">
            <Card>
              <ImageContainer>
                <img src={addStory} style={imageStyle} />
              </ImageContainer>
              <Card.Content>
                <Card.Header>{t('HomePage.menuList.createStoryTitle')}</Card.Header>
                <CardDescription>
                  <Card.Description>{t('HomePage.menuList.createStoryDesc')}</Card.Description>
                </CardDescription>
              </Card.Content>
            </Card>
          </Link>

          <Link to={'/stories'} className="p-2">
            <Card>
              <ImageContainer>
                <img src={editStory} style={imageStyle} />
              </ImageContainer>
              <Card.Content>
                <Card.Header>{t('HomePage.menuList.showStoriesTitle')}</Card.Header>
                <CardDescription>
                  <Card.Description>{t('HomePage.menuList.showStoriesDesc')}</Card.Description>
                </CardDescription>
              </Card.Content>
            </Card>
          </Link>

          <Link to={'/personal-data'} className="p-2">
            <Card>
              <ImageContainer>
                <img src={narratorDetails} style={imageStyle} />
              </ImageContainer>
              <Card.Content>
                <Card.Header>{t('HomePage.menuList.personalDateTitle')}</Card.Header>
                <CardDescription>
                  <Card.Description>{t('HomePage.menuList.personalDateDesc')}</Card.Description>
                </CardDescription>
              </Card.Content>
            </Card>
          </Link>
        </Card.Group>
      </div>
    </div>
  )
}
