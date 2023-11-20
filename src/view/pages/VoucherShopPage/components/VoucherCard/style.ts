import styled from 'styled-components'

export const VoucherCardButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? props.theme.voucherBodySelected : props.theme.voucherBody)};
`
export const Button = styled.p`
  background-color: #f56a4d;
`
