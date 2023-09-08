import * as React from 'react'
import styled from 'styled-components'
import PlayIcon from '@svg/u_play.svg'
import PauseIcon from '@svg/u_pause.svg'
import { useAudio } from '../../../../../shared/hooks/useAudio'
interface IntroZencastItem {
  title: string
  userName: string
  userTitle: string
  userPhoto: string
  audioPath: string
}

const NarratorItemContainer = styled.button`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #ffe7d9;
  position: relative;
  margin-bottom: 32px;
`

const Avatar = styled.img`
  width: 72px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
`

const EasyAccessCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 16px;
  padding-right: 32px;
  width: 300px;
`

const EasyAccessNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 16px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  right: -13px;
  top: -9px;
  background-color: #f56a4d;
`
const NarratorItemIconWithText = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const EasyAccessTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #3b5070;
`

const EasyAccessDesc = styled.span`
  width: auto;
  font-size: 14px;
  color: #3b5070;
  max-width: 200px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const IntroItem = ({ title, userName, userTitle, userPhoto, audioPath }: IntroZencastItem) => {
  const [playing, toggle] = useAudio(audioPath)

  return (
    <NarratorItemContainer onClick={toggle}>
      <NarratorItemIconWithText>
        <Avatar src={userPhoto} />

        <EasyAccessCenter>
          <EasyAccessTitle>{title}</EasyAccessTitle>
          <EasyAccessDesc>{userName} </EasyAccessDesc>
          <EasyAccessDesc>{userTitle} </EasyAccessDesc>
        </EasyAccessCenter>
      </NarratorItemIconWithText>
      <EasyAccessNext>
        {playing ? (
          <img src={PauseIcon} width="30" height="30" style={{ marginLeft: 18 }} />
        ) : (
          <img src={PlayIcon} width="30" height="30" style={{ marginLeft: 18 }} />
        )}
      </EasyAccessNext>
    </NarratorItemContainer>
  )
}
