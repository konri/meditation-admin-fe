import React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.input`
  -webkit-appearance: none;
  position: relative;
  background-image: url(https://i.postimg.cc/857jHw2q/Screenshot-2020-04-16-at-1-07-06-PM.png);
  background-size: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => (props.width as number) / 2}px;
  outline: none;
  transition: background-image 0.9s;
  box-shadow: 0px 0px 10px 1px gray;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: ${(props) => (props.width as number) / 2}px;
    width: ${(props) => (props.width as number) / 2}px;
    background-color: navy;
    border-radius: 50%;
    transition: all 0.9s;
    background-color: #f7ca33;
  }

  &:checked {
    background-image: url(https://i.postimg.cc/Hn0nstVK/Screenshot-2020-04-16-at-1-07-19-PM.png);
    transition: background-image 0.9s;
  }

  &:checked:before {
    transform: translate(100%);
    transition: all 0.9s;
    background-color: #ecf0f3;
  }
`

export interface DarkModeToggleProps {
  width: number
  height: number
  checked?: boolean
  onChange: (checked: boolean) => void
}

export function DarkModeToggle({ width, height, checked = false, onChange }: DarkModeToggleProps) {
  return (
    <ToggleContainer
      width={width}
      height={height}
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  )
}
