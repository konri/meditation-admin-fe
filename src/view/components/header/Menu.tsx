import { Menu } from 'semantic-ui-react'
import NavButton from './NavButton'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { UserRoles } from '../../../shared/model/UserRoles'
import { useSelector } from 'react-redux'
import { Store } from '../../../store/rootReducer'
import { UserDetails } from '../../../shared/model/UserDetails'
import { useTranslation } from 'react-i18next'

const MenuContainer = styled.div`
  .ui.secondary.menu .item {
    color: ${({ theme }) => theme.menuText};
  }

  .ui.secondary.menu .active.item {
    background: ${({ theme }) => theme.menuActiveBackground};
    color: ${({ theme }) => theme.menuTextActive};
  }
`
const menuByRole = {
  nonAuth: [''],
  auth: {
    [UserRoles.ADMIN]: ['dashboard'],
    [UserRoles.NARRATOR]: ['stories'],
    [UserRoles.USER]: [],
    always: ['logout'],
  },
  always: [''],
}

export default function AppMenu() {
  const user = useSelector((state: Store) => state.auth.user)
  const { t } = useTranslation()
  const buildMenu = useCallback((user: UserDetails | null) => {
    const menuList = [...menuByRole.always]
    if (user) {
      menuList.push(...menuByRole.auth[user.role], ...menuByRole.auth.always)
    } else {
      menuList.push(...menuByRole.nonAuth)
    }
    return menuList.map((item: string) => <NavButton key={item} label={t(`menu.${item}`)} />)
  }, [])

  return (
    <MenuContainer>
      <Menu secondary className="pr-2">
        {buildMenu(user)}
      </Menu>
    </MenuContainer>
  )
}
