import styled from 'styled-components'

export const Header = styled.p<{ end?: boolean; center?: boolean; bold?: boolean }>`
  font-size: 48px;
  line-height: 48px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  margin-bottom: 48px;
  text-align: ${(props) => (props.end ? 'end' : props.center ? 'center' : 'start')};

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Description = styled.p<{ end?: boolean; big?: boolean; center?: boolean }>`
  font-size: ${(props) => (props.big ? 36 : 28)}px;
  line-height: ${(props) => (props.big ? 38 : 30)}px;
  text-align: ${(props) => (props.end ? 'end' : props.center ? 'center' : 'start')};
  @media (max-width: 768px) {
    text-align: start;
  }
`
