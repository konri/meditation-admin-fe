import React from 'react'
import { Button } from 'semantic-ui-react'

export interface ButtonWithLinkComponent {
  link: string
  icon: string
  primary?: boolean
  color?: any
}

export default function ButtonWithLinkComponent({ icon, link, primary = false, color }: ButtonWithLinkComponent) {
  return (
    <a href={link} target="_blank">
      <Button primary={primary} circular color={color} icon={icon} />
    </a>
  )
}
