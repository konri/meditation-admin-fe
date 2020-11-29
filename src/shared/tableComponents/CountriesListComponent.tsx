import React from 'react'
import { Flag, List } from 'semantic-ui-react'
import { FlagNameValues } from 'semantic-ui-react/dist/commonjs/elements/Flag/Flag'
import ScrollContainer from './ScrollContainer'

export default function CountriesListComponent(countries: Array<string>) {
  if (countries && countries.length > 0) {
    const countriesRow = countries
      .map((country: string) => {
        if (country == 'united-states-of-america') {
          return 'united states'
        }
        return country.split('-').join(' ')
      })
      .map((country) => (
        <List.Item>
          <Flag name={country as FlagNameValues} />
          {country}
        </List.Item>
      ))
    return (
      <ScrollContainer scroll={countries.length > 8} maxHeight="200px">
        <List>{countriesRow}</List>
      </ScrollContainer>
    )
  }
  return <span>-</span>
}
