import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import React from 'react'

interface NavButtonProps {
  label: string
}

function NavButton({ label }: NavButtonProps) {
  let location = useLocation()
  const path = `/${label.split(' ').join('-')}`
  const isActive = location.pathname === path
  return (
    <Link to={path}>
      <Menu.Item name={label} active={isActive} />
    </Link>
  )
}

export default NavButton
