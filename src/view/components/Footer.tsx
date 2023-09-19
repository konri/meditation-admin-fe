import React from 'react'
import styled from 'styled-components'

export interface FooterProps {
  height: string
}

const FooterContainer = styled.div<FooterProps>`
  padding: 0 20px;
  bottom: 0;
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.headerBackground};
  min-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterCopyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`

function Footer({ height }: FooterProps) {
  return (
    <FooterContainer height={height}>
      <FooterCopyright>
        &copy; Copyright <strong>Zencast</strong>. All Rights Reserved <br />
        Konrad Hopek Development
      </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer
