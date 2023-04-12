import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Card,
  Checkbox,
  Dimmer,
  Dropdown,
  Form,
  Input,
  Label,
  Loader,
  Segment,
  TextArea,
} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import { UploadFile } from '@components/upload/UploadFile'
import { CreateMeditation } from './CreateMeditation'
import {
  onEdit,
  onMeditationAdd,
  onMeditationRemove,
  onReset,
  onSaveStory,
} from '../../../store/createStory/createStory.slice'
import { Store } from '../../../store/rootReducer'
import { toast } from 'react-toastify'

//
// type: SERIES_DAY_BY_DAY
// title: "Darmowa praca"
// description: "Popatrz na dzień nowym spojrzeniem i zacznij pracę na pełnych obrotach"
// language: PL
// isFree: true
// photo: "https://image.freepik.com/free-photo/young-pretty-joyful-brunette-woman-meditating-table-surround-work-stuff-flying-papers-cheerful-mood-taking-break-working-studying-relaxation-true-emotions_197531-1873.jpg"
// storyHashtagIds: [4]
// availableDate: "2021-11-10T00:00:00"
// meditations: [
// {
//   sequence: 1
//   duration: 120
//   title: "Zrelaksuj ciało"
//   path: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-31172/zapsplat_public_places_art_gallery_of_nsw_int_viewing_gallery_ambience_creaky_wood_floor_people_walla_sydney_australia_32678.mp3"
// }

const languageOptions = [
  { key: 'pl', value: 'PL', flag: 'pl', text: 'Polski' },
  { key: 'en', value: 'EN', flag: 'us', text: 'English' },
]

export function CreateStoryPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { story } = useSelector((state: Store) => state.createStory)
  const { error, loading, success, isSubmitted } = useSelector((state: Store) => state.createStory.form)

  useEffect(() => {
    if (error) {
      toast.error(t('createStoryPage.errorMain'))
    }
  }, [error])

  useEffect(() => {
    if (success) {
      toast.success(t('createStoryPage.success'))
    }
  }, [success])

  const showError = useCallback(
    (key: string) => {
      if (!isSubmitted) {
        return false
      }

      // @ts-ignore
      return story[key].length === 0
    },
    [story, isSubmitted]
  )

  const changeValue = useCallback(
    (key: string, value: any) => {
      dispatch(onEdit({ key, value }))
    },
    [dispatch]
  )

  const storyTypeOptions = useMemo(
    () => [
      { key: 'SINGLE', value: 'SINGLE', text: t('createStoryPage.type.SINGLE') },
      { key: 'DAILY_SINGLE', value: 'DAILY_SINGLE', text: t('createStoryPage.type.DAILY_SINGLE') },
      { key: 'SERIES_DAY_BY_DAY', value: 'SERIES_DAY_BY_DAY', text: t('createStoryPage.type.SERIES_DAY_BY_DAY') },
      { key: 'SERIES_SAME_TOPIC', value: 'SERIES_SAME_TOPIC', text: t('createStoryPage.type.SERIES_SAME_TOPIC') },
      { key: 'SERIES_TIME_LAPSE', value: 'SERIES_TIME_LAPSE', text: t('createStoryPage.type.SERIES_TIME_LAPSE') },
    ],
    [t]
  )

  const storyHashTagsOptions = useMemo(
    () => [
      { key: 'stress', value: 1, text: t('hashtags.stress') },
      { key: 'sleep', value: 2, text: t('hashtags.sleep') },
      { key: 'anxiety', value: 3, text: t('hashtags.anxiety') },
      { key: 'focus', value: 4, text: t('hashtags.focus') },
      { key: 'self-care', value: 5, text: t('hashtags.self-care') },
      { key: 'beginers', value: 6, text: t('hashtags.beginers') },
      { key: 'relax', value: 7, text: t('hashtags.relax') },
      { key: 'work', value: 8, text: t('hashtags.work') },
      { key: 'mother', value: 9, text: t('hashtags.mother') },
      { key: 'development', value: 10, text: t('hashtags.development') },
      { key: 'health', value: 11, text: t('hashtags.health') },
      { key: 'kids', value: 13, text: t('hashtags.kids') },
      // { key: 'relationship', value: 12, text: t('hashtags.relationship') },
      // { key: 'happiness', value: 14, text: t('hashtags.happiness') },
    ],
    [t]
  )

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 mt-5 mt-lg-3">
      <Card className="ml-2 mr-2 mb-2" style={{ width: '90%' }}>
        {loading && (
          <Dimmer active>
            <Loader indeterminate> {t('createStoryPage.loading')}</Loader>
          </Dimmer>
        )}
        <Card.Content>
          <Card.Header>{t('createStoryPage.mainTitle')}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Segment padded>
            <Label attached="top">{t('createStoryPage.title')}</Label>
            <Form.Field>
              <Input
                placeholder={t('createStoryPage.titlePlaceholder')}
                className="w-100"
                onChange={(event, data) => changeValue('title', data.value)}
              >
                <input data-testid="my-input-1" value={story.title} />
              </Input>
              {showError('title') && (
                <Label basic color="red" pointing>
                  {t('createStoryPage.error.title')}
                </Label>
              )}
            </Form.Field>
          </Segment>

          <Segment padded>
            <Label attached="top">{t('createStoryPage.desc')}</Label>
            <Form.Field>
              <Input
                placeholder={t('createStoryPage.descPlaceholder')}
                className="w-100"
                onChange={(event, data) => changeValue('description', data.value)}
              >
                <input value={story.description} />
              </Input>
              {showError('description') && (
                <Label basic color="red" pointing>
                  {t('createStoryPage.error.desc')}
                </Label>
              )}
            </Form.Field>
          </Segment>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <Segment padded className="m-0 mr-2 w-100 w-lg-50">
              <Label attached="top">{t('createStoryPage.type.title')}</Label>
              <Form.Field>
                <Dropdown
                  className="w-100"
                  placeholder={t('createStoryPage.type.placeholder')}
                  fluid
                  search
                  value={story.type}
                  onChange={(event, data) => changeValue('type', data.value)}
                  selection
                  options={storyTypeOptions}
                />
                {showError('type') && (
                  <Label basic color="red" pointing>
                    {t('createStoryPage.error.type')}
                  </Label>
                )}
              </Form.Field>
            </Segment>

            <Segment padded className="m-0 w-100 w-lg-50">
              <Label attached="top">{t('createStoryPage.language')}</Label>
              <Form.Field>
                <Dropdown
                  className="w-100"
                  placeholder={t('createStoryPage.languagePlaceholder')}
                  fluid
                  search
                  selection
                  value={story.language}
                  onChange={(event, data) => changeValue('language', data.value)}
                  options={languageOptions}
                />
                {showError('language') && (
                  <Label basic color="red" pointing>
                    {t('createStoryPage.error.language')}
                  </Label>
                )}
              </Form.Field>
            </Segment>
          </div>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-3">
            <Segment padded className="m-0 mr-2 w-100 w-lg-50">
              <Label attached="top">{t('createStoryPage.isFree')}</Label>
              <Checkbox
                toggle
                label={t('createStoryPage.isFree')}
                checked={story.isFree}
                onChange={(event, data) => changeValue('isFree', data.checked)}
              />
            </Segment>

            <Segment padded className="m-0 w-100 w-lg-50">
              <Label attached="top">{t('createStoryPage.availableDate')}</Label>
              <DatePicker
                closeOnScroll={true}
                dateFormat="dd/MM/yyyy"
                selected={story.availableDate}
                onChange={(date) => changeValue('availableDate', date)}
              />
            </Segment>
          </div>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-3">
            <Segment padded className="m-0 w-100">
              <Label attached="top">{t('createStoryPage.hashtags')}</Label>
              <Form.Field>
                <Dropdown
                  placeholder={t('createStoryPage.hashtags')}
                  fluid
                  multiple
                  selection
                  options={storyHashTagsOptions}
                  value={story.storyHashtagIds}
                  onChange={(event, data) => changeValue('storyHashtagIds', data.value)}
                />

                {showError('storyHashtagIds') && (
                  <Label basic color="red" pointing>
                    {t('createStoryPage.error.hashtags')}
                  </Label>
                )}
              </Form.Field>
            </Segment>
          </div>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-3">
            <Segment padded className="m-0 w-100">
              <Label attached="top">{t('createStoryPage.photo')}</Label>
              <Form.Field>
                <UploadFile accept="image/*" onSave={(path) => changeValue('photo', path)} />
                {showError('photo') && (
                  <Label basic color="red" pointing>
                    {t('createStoryPage.error.photo')}
                  </Label>
                )}
              </Form.Field>
            </Segment>
          </div>

          <Card className="w-100">
            <Card.Content>
              <Card.Header>{t('createStoryPage.meditationsTitle')}</Card.Header>
            </Card.Content>
            <Card.Content>
              <div className="d-flex flex-column w-100">
                {story.meditations.map((meditation, index) => (
                  <CreateMeditation index={index} key={meditation.id} meditation={meditation} />
                ))}
              </div>
            </Card.Content>
          </Card>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="red" onClick={() => dispatch(onReset())}>
              {t('createStoryPage.reset')}
            </Button>
            <Button basic color="green" onClick={() => dispatch(onSaveStory())}>
              {t('createStoryPage.save')}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}
