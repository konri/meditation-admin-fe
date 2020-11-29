import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function (text: string) {
  return <TextContainer>{text}</TextContainer>
}
