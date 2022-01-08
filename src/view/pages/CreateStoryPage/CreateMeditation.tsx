import React, { useCallback, useEffect } from 'react'
import { Button, Card, Form, Input, Label, Segment } from 'semantic-ui-react'
import { UploadFile } from '@components/upload/UploadFile'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  Meditation,
  onMeditationAdd,
  onMeditationChange,
  onMeditationRemove,
} from '../../../store/createStory/createStory.slice'
import { AudioDetails } from '@components/upload/UploadFile.service'
import { Store } from '../../../store/rootReducer'
import { toast } from 'react-toastify'

interface CreateMeditationProps {
  meditation: Meditation
  index: number
}

export function CreateMeditation({ meditation, index }: CreateMeditationProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { isSubmitted } = useSelector((state: Store) => state.createStory.form)

  const showError = useCallback(
    (key: string) => {
      if (!isSubmitted) {
        return false
      }

      // @ts-ignore
      return meditation[key].length === 0
    },
    [meditation, isSubmitted]
  )

  const saveAudio = useCallback((audioPath: string, details?: AudioDetails | null) => {
    // todo: change path for correct
    dispatch(
      onMeditationChange({
        id: meditation.id,
        key: 'path',
        value:
          'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-31172/zapsplat_public_places_art_gallery_of_nsw_int_viewing_gallery_ambience_creaky_wood_floor_people_walla_sydney_australia_32678.mp3',
      })
    )
    dispatch(onMeditationChange({ id: meditation.id, key: 'duration', value: details!.duration }))
  }, [])

  return (
    <Card className="w-100">
      <Card.Content>
        <Card.Header>{t('createStoryPage.createMeditation.title', { sequence: index + 1 })}</Card.Header>
      </Card.Content>
      <Card.Content>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-3">
          <Segment padded className="m-0 w-100">
            <Label attached="top">{t('createStoryPage.title')}</Label>
            <Form.Field>
              <Input placeholder={t('createStoryPage.titlePlaceholder')} className="w-100">
                <input
                  data-testid="my-input-1"
                  value={meditation.title}
                  onChange={(event) =>
                    dispatch(onMeditationChange({ id: meditation.id, key: 'title', value: event.target.value }))
                  }
                />
              </Input>
              {showError('title') && (
                <Label basic color="red" pointing>
                  {t('createStoryPage.error.titleMeditation')}
                </Label>
              )}
            </Form.Field>
          </Segment>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-3">
          <Segment padded className="m-0 w-100">
            <Label attached="top">{t('createStoryPage.createMeditation.audio')}</Label>
            <Form.Field>
              <UploadFile accept="audio/*" onSave={saveAudio} />
              {showError('path') && (
                <Label basic color="red" pointing>
                  {t('createStoryPage.error.audio')}
                </Label>
              )}
            </Form.Field>
          </Segment>
        </div>
      </Card.Content>

      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="red" onClick={() => dispatch(onMeditationRemove(meditation.id))} disabled={index === 0}>
            {t('createStoryPage.createMeditation.delete')}
          </Button>
          <Button basic color="green" onClick={() => dispatch(onMeditationAdd(meditation.id))}>
            {t('createStoryPage.createMeditation.add')}
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}
