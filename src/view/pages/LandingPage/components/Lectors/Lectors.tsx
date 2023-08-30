import { LANG_LS } from '../../../../../translations'
import { Description, Header } from '../../style'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PeopleStory, { People } from '../People/PeopleStory'
import { getNarrators, NarratorResponseDTO } from './service'

export function Lectors() {
  const { t } = useTranslation()
  const language = localStorage.getItem(LANG_LS) || 'PL'
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<NarratorResponseDTO>>([])

  useEffect(() => {
    getNarrators(language).then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Description>{t('LandingPage.lectors.loading')}</Description>
      </div>
    )
  }

  return <PeopleStory team={data} title="LandingPage.lectors.title" />
}
