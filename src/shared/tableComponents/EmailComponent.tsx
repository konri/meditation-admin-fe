import React from 'react'
import styled from 'styled-components'

const EmailContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.menuText};
`

export function EmailComponent(email: string): any {
  return (
    <a href={`mailto:${email}`}>
      <EmailContainer>{email}</EmailContainer>
    </a>
  )
}
