import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerWithImage {
  leftImagePath?: string
  rightImagePath?: string
  mobileImagePath?: string
  children: ReactNode
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

export function ContainerWithImage({ leftImagePath, rightImagePath, mobileImagePath, children }: ContainerWithImage) {
  return (
    <div
      className="container d-flex flex-column flex-md-row align-items-center justify-content-md-between w-100 h-100"
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

      <div className="content">{children}</div>
      {rightImagePath && (
        <div className="image-right d-none d-md-block">
          <Image src={rightImagePath} alt="Right image" decoding="async" loading="lazy" />
        </div>
      )}
    </div>
  )
}
