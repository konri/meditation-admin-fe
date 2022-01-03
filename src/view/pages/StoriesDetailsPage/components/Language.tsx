import React from 'react'
import { Flag } from 'semantic-ui-react'
import { FlagNameValues } from 'semantic-ui-react/dist/commonjs/elements/Flag/Flag'

const langMapper: { [key: string]: FlagNameValues } = {
  PL: 'poland',
  EN: 'america',
  SK: 'slovakia',
  SL: 'slovenia',
  SV: 'sweden',
  DE: 'germany',
  PT: 'portugal',
}

export function Language(language: string) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <a title={language}>
        <Flag name={langMapper[language] as FlagNameValues} />
      </a>
    </div>
  )
}
