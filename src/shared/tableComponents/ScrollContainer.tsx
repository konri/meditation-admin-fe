import styled from 'styled-components'

export interface ScrollContainerProps {
  scroll: boolean
  maxHeight: string
}

const ScrollContainer = styled.div<ScrollContainerProps>`
  max-height: ${(props) => props.maxHeight};
  overflow-y: ${(props) => (props.scroll ? 'scroll' : 'hidden')};
`
export default ScrollContainer
