import React from 'react'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'

export interface LanguagesComponentProps {
  email: string
  lang: Array<string>
  langLevel: Array<string>
}

const TextContainer = styled.div`
  color: ${({ theme }) => theme.menuText};
`

export default function LanguagesComponent({ lang, langLevel, email }: LanguagesComponentProps) {
  if (lang && lang.length > 0) {
    const rows = lang.map((currentLang: string, index: number) => (
      <Table.Row key={`${email}-${currentLang}`}>
        <Table.Cell>
          <TextContainer>{currentLang}</TextContainer>
        </Table.Cell>
        <Table.Cell>
          <TextContainer>{langLevel[index]}</TextContainer>
        </Table.Cell>
      </Table.Row>
    ))
    return (
      <Table basic="very" celled collapsing>
        <Table.Body>{rows}</Table.Body>
      </Table>
    )
  }
  return <span>No data</span>
}
