import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerWithImage {
  leftImagePath?: string
  rightImagePath?: string
  mobileImagePath?: string
  children?: ReactNode
}

const Image = styled.img`
  width: 500px;
  max-height: 800px;

  @media (max-width: 1024px) {
    width: 400px;
    max-height: 700px;
  }

  @media (max-width: 768px) {
    width: 350px;
    max-height: 500px;
  }
`

const Content = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Separator = styled.div`
  height: 2px;
  background-color: rgba(241, 240, 240, 0.9);
  width: 80%;
  margin: 15px 0 30px 0;
`

export function ContainerWithImage({ leftImagePath, rightImagePath, mobileImagePath, children }: ContainerWithImage) {
  return (
    <div
      className="container d-flex flex-column flex-md-row align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5"
      data-testid="container-with-image"
    >
      <div className="mobile-image d-flex d-lg-none">
        {mobileImagePath && (
          <img className="hero-image-mobile" src={mobileImagePath} alt="Mobile Image" decoding="async" loading="lazy" />
        )}
      </div>
      {leftImagePath && (
        <div className="image-left d-none d-md-block">
          <Image src={leftImagePath} alt="Left image" decoding="async" loading="lazy" />
        </div>
      )}

      <Content>{children}</Content>
      {rightImagePath && (
        <div className="image-right d-none d-md-block">
          <Image src={rightImagePath} alt="Right image" decoding="async" loading="lazy" />
        </div>
      )}
      <div className="w-100 d-flex align-items-center justify-content-center d-lg-none">
        <Separator />
      </div>
    </div>
  )
}
