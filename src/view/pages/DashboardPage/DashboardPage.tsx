import React, { useState } from 'react'
import styled from 'styled-components'
import { UserProfileDetails } from './model/UserProfileDetails'
import { Profile } from '../../../shared/settings/endpoints'
import { MaterialColumn } from '../../../shared/model/MaterialColumn'
import { EmailComponent } from '../../../shared/tableComponents/EmailComponent'
import TableDataComponent from '../../components/TableDataComponent/TableDataComponent'
import ColumnSelectionModal from '../../components/TableDataComponent/ColumnSelectionModal'
import LanguagesComponent from '../../../shared/tableComponents/LanguagesComponent'
import DownloadFileComponent from '../../../shared/tableComponents/DownloadFileComponent'
import CountryComponent from '../../../shared/tableComponents/CountryComponent'
import ButtonWithLinkComponent from '../../../shared/tableComponents/ButtonWithLinkComponent'
import ListComponent from '../../../shared/tableComponents/ListComponent'
import CountriesListComponent from '../../../shared/tableComponents/CountriesListComponent'

interface IProps {}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2185d0;
  font-weight: bold;
`

const columns: Array<MaterialColumn<UserProfileDetails>> = [
  { title: 'Name', field: 'firstName', width: 100 },
  { title: 'Surname', field: 'lastName', width: 100, defaultSort: 'asc' },
  { title: 'Email', field: 'email', render: ({ email }: UserProfileDetails) => EmailComponent(email), width: 150 },
  {
    title: 'Languages',
    field: 'lang',
    filtering: false,
    render: ({ email, lang, langLevel }: UserProfileDetails) => LanguagesComponent({ email, lang, langLevel }),
  },
  {
    title: 'CV',
    field: 'cvPath',
    render: ({ cvPath, firstName, lastName }: UserProfileDetails) =>
      DownloadFileComponent({
        fileName: `${firstName} ${lastName}`,
        id: cvPath,
      }),
  },
  { title: 'City', field: 'city' },
  { title: 'Country', field: 'country', render: ({ country }: UserProfileDetails) => CountryComponent(country) },
  { title: 'Phone', field: 'phone' },
  { title: 'Degree', field: 'degree' },
  { title: 'Years \n experience', field: 'yearsOfExperience' },
  { title: 'Found us', field: 'foundUs' },
  {
    title: 'linkedIn',
    field: 'linkedIn',
    render: ({ linkedIn }: UserProfileDetails) =>
      ButtonWithLinkComponent({
        link: linkedIn,
        icon: 'linkedin',
        color: 'linkedin',
      }),
  },
  {
    title: 'preferenceRoles',
    field: 'preferenceRoles',
    render: ({ preferenceRoles }: UserProfileDetails) => ListComponent(preferenceRoles),
  },
  {
    title: 'countriesPermitWork',
    field: 'countriesPermitWork',
    render: ({ countriesPermitWork }: UserProfileDetails) => CountriesListComponent(countriesPermitWork),
  },
  {
    title: 'preferenceCountries',
    field: 'preferenceCountries',
    render: ({ preferenceCountries }: UserProfileDetails) => CountriesListComponent(preferenceCountries),
  },
  {
    title: 'technologies',
    field: 'technologies',
    render: ({ technologies }: UserProfileDetails) => ListComponent(technologies),
  },
  { title: 'Creating date', field: 'createdAt' },
]

export default function DashboardPage(props: React.PropsWithChildren<IProps>): React.FunctionComponentElement<IProps> {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Title>Users dashboard</Title>
      <TableDataComponent columns={columns} url={Profile.all} />
    </div>
  )
}
