// @ts-ignore
import Faq from 'react-faq-component'
import React from 'react'
import { useTranslation } from 'react-i18next'

const data = {
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: <p>current version is 1.2.1</p>,
    },
  ],
}

const styles = {
  bgColor: 'white',
  titleTextColor: '#48482a',
  rowTitleColor: '#78789a',
  rowTitleTextSize: 'large',
  rowContentColor: '#48484a',
  rowContentTextSize: '16px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '150px',
  arrowColor: 'black',
}

const config = {
  animate: true,
}

export function FaqSection() {
  const { t } = useTranslation()
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
            <circle cx="1630" cy="280" r="40" />
            <circle cx="178" cy="138" r="128" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            {t('LandingPage.PeopleStory.title')}
          </h2>
        </div>
        <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  )
}
