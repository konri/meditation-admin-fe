import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import React from 'react'

interface NavButtonProps {
  href: string
  label: string
}

function NavButton({ href, label }: NavButtonProps) {
  let location = useLocation()
  const path = `/${href}`
  const isActive = location.pathname === path
  return (
    <Link to={path}>
      <Menu.Item name={label} active={isActive} />
    </Link>
  )
}

export default NavButton
