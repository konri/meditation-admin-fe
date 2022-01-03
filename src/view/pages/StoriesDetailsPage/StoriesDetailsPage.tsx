import React, { useState } from 'react'
import { MaterialColumn } from '../../../shared/model/MaterialColumn'
import ListComponent from '../../../shared/tableComponents/ListComponent'
import { Title } from '../../components/styled-components/Title'
import TableDataGraphComponent from '@components/TableDataComponent/TableDataGraphComponent'
import { GET_NARRATOR_STORIES, StoryWithMeditations } from './StoriesDetails.schema'
import { useTranslation } from 'react-i18next'
import { PhotoModal, StoryPhoto } from './components/StoryPhoto'
import { Checker } from './components/Checker'
import { TranslatedText } from './components/TranslatedText'
import { Language } from './components/Language'
import { DateParser } from './components/DateParser'

interface IProps {}

export default function StoriesDetailsPage(
  props: React.PropsWithChildren<IProps>
): React.FunctionComponentElement<IProps> {
  const { t } = useTranslation()
  const [openPhotoModal, setOpenPhotoModal] = useState<{ photoPath: string; title: string } | null>()
  const columns: Array<MaterialColumn<StoryWithMeditations>> = [
    { title: t('stories.title'), field: 'title', width: 120 },
    {
      title: t('stories.type'),
      field: 'type',
      width: 100,
      render: ({ type }: StoryWithMeditations) => TranslatedText({ translation: t(`storyType.${type}`) }),
    },
    { title: t('stories.description'), field: 'description', width: 120 },
    {
      title: t('stories.photo'),
      field: 'photo',
      width: 60,
      render: ({ title, photo }: StoryWithMeditations) =>
        StoryPhoto({
          photoPath: photo,
          title,
          onOpen: (photoPath, title) => setOpenPhotoModal({ photoPath, title }),
        }),
    },
    {
      title: t('stories.language'),
      field: 'language',
      width: 60,
      render: ({ language }: StoryWithMeditations) => Language(language),
    },
    {
      title: t('stories.hashtags'),
      field: 'hashtags',
      width: 100,
      render: ({ hashtags }: StoryWithMeditations) =>
        ListComponent(hashtags.map((hashtag) => t(`hashtags.${hashtag.title}`))),
    },
    {
      title: t('stories.isFree'),
      field: 'isFree',
      width: 60,
      render: ({ isFree }: StoryWithMeditations) => Checker({ value: isFree }),
    },
    {
      title: t('stories.disable'),
      field: 'disable',
      width: 60,
      render: ({ disable }: StoryWithMeditations) => Checker({ value: disable }),
    },
    {
      title: t('stories.createdAt'),
      field: 'createdAt',
      width: 120,
      render: ({ createdAt }: StoryWithMeditations) => DateParser(createdAt, true),
    },
    {
      title: t('stories.availableDate'),
      field: 'availableDate',
      width: 120,
      defaultSort: 'asc',
      render: ({ availableDate }: StoryWithMeditations) => DateParser(availableDate, false),
    },
  ]

  return (
    <>
      {openPhotoModal && (
        <PhotoModal
          photoPath={openPhotoModal.photoPath}
          title={openPhotoModal.title}
          onClose={() => setOpenPhotoModal(null)}
        />
      )}
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <Title>Stories</Title>
        <TableDataGraphComponent columns={columns} schema={GET_NARRATOR_STORIES} />
      </div>
    </>
  )
}
