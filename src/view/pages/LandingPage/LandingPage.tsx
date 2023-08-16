import React from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from './components/Hero/Hero'
import { ContainerWithImage } from './components/ContainerWithImage/ContainerWithImage'
import Testimonials from './components/Testimonial/Testimonial'
import PeopleStory from './components/People/PeopleStory'
import { FaqSection } from './components/FAQ/Faq'
import { Subscriptions } from './components/Subscriptions/Subscriptions'

export const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Hero />
      <ContainerWithImage
        rightImagePath="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?w=1052&h=1246&q=80&fm=webp"
        mobileImagePath="https://images.ctfassets.net/v3n26e09qg2r/4NqNkoUd0hvoIvsRJrm2bS/50490f004b2a68e044e305e25c0da38a/Hero_Mobile_Image.webp?w=1192&h=992&q=80&fm=webp"
      >
        <h1>Title</h1>
        <p>desc</p>
      </ContainerWithImage>

      <ContainerWithImage
        leftImagePath="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?w=1052&h=1246&q=80&fm=webp"
        mobileImagePath="https://images.ctfassets.net/v3n26e09qg2r/4NqNkoUd0hvoIvsRJrm2bS/50490f004b2a68e044e305e25c0da38a/Hero_Mobile_Image.webp?w=1192&h=992&q=80&fm=webp"
      >
        <h1>Title</h1>
        <p>desc</p>
      </ContainerWithImage>
      <PeopleStory />
      <Testimonials />

      <FaqSection />

      <Subscriptions />
    </div>
  )
}
