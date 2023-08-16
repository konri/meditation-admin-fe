import React from 'react'
import logo from '@svg/logo.svg'
import AliceCarousel from 'react-alice-carousel'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const team = [
  {
    photo:
      'https://ocdn.eu/pulscms-transforms/1/50rk9kpTURBXy84NmY1ODQ0YmJlOWIyMDU0YjljMDlkM2QxODc1ZjU5YS5qcGeTlQMCzQEqzQf6zQR8lQLNBLAAw8OTCaY4ZTFiMzMG3gABoTAB/michelle-rodriguez.jpeg',
    description:
      'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.',
    name: 'Konrad Hopek',
  },
  {
    photo:
      'https://ocdn.eu/pulscms-transforms/1/50rk9kpTURBXy84NmY1ODQ0YmJlOWIyMDU0YjljMDlkM2QxODc1ZjU5YS5qcGeTlQMCzQEqzQf6zQR8lQLNBLAAw8OTCaY4ZTFiMzMG3gABoTAB/michelle-rodriguez.jpeg',
    description:
      'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.',
    name: 'Konrad Hopek',
  },
  {
    photo:
      'https://ocdn.eu/pulscms-transforms/1/50rk9kpTURBXy84NmY1ODQ0YmJlOWIyMDU0YjljMDlkM2QxODc1ZjU5YS5qcGeTlQMCzQEqzQf6zQR8lQLNBLAAw8OTCaY4ZTFiMzMG3gABoTAB/michelle-rodriguez.jpeg',
    description:
      'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.',
    name: 'Konrad Hopek',
  },
  {
    photo:
      'https://ocdn.eu/pulscms-transforms/1/50rk9kpTURBXy84NmY1ODQ0YmJlOWIyMDU0YjljMDlkM2QxODc1ZjU5YS5qcGeTlQMCzQEqzQf6zQR8lQLNBLAAw8OTCaY4ZTFiMzMG3gABoTAB/michelle-rodriguez.jpeg',
    description:
      'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.',
    name: 'Konrad Hopek',
  },
  {
    photo:
      'https://ocdn.eu/pulscms-transforms/1/50rk9kpTURBXy84NmY1ODQ0YmJlOWIyMDU0YjljMDlkM2QxODc1ZjU5YS5qcGeTlQMCzQEqzQf6zQR8lQLNBLAAw8OTCaY4ZTFiMzMG3gABoTAB/michelle-rodriguez.jpeg',
    description:
      'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.',
    name: 'Konrad Hopek',
  },
]

export const Story = styled.div``

export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export default function PeopleStory() {
  const { t } = useTranslation()
  const items = team.map((item, index) => {
    return (
      <Story className="mt-20">
        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
          <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
            <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
              <svg
                className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                viewBox="0 0 64 64"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
              <Image
                className="relative flex-shrink-0 object-cover rounded-full"
                src="https://moviesroom.pl/wp-content/uploads/2023/06/lost.jpg"
                alt=""
              />
            </div>
            <blockquote className="text-xl font-medium mb-4">{item.description}</blockquote>
            <cite className="block font-bold text-lg not-italic mb-1">{item.name}</cite>
            <div className="text-gray-600">
              <span>CEO & Co-Founder</span>{' '}
              <a className="text-blue-600 hover:underline" href="#0">
                @Dropbox
              </a>
            </div>
          </div>{' '}
        </div>
      </Story>
    )
  })

  const Carousel = <AliceCarousel autoWidth infinite mouseTracking items={items} />

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF4EE" offset="0%" />
              <stop stopColor="#FFE7D9" offset="67.402%" />
              <stop stopColor="#FFCCB6" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            {t('LandingPage.PeopleStory.title')}
          </h2>
        </div>
        <div>{Carousel}</div>
      </div>
    </section>
  )
}
