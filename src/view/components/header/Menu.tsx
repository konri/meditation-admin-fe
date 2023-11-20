import { Menu } from 'semantic-ui-react'
import NavButton from './NavButton'
import React, { useCallback, useMemo } from 'react'
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
  nonAuth: ['shop'],
  auth: {
    [UserRoles.ADMIN]: ['dashboard'],
    [UserRoles.NARRATOR]: ['stories'],
    [UserRoles.USER]: [],
    always: [],
  },
  always: [],
}

export default function AppMenu() {
  const user = useSelector((state: Store) => state.auth.user)
  const { t } = useTranslation()
  const buildMenu = useMemo(() => {
    const menuList: string[] = menuByRole.always
    if (user) {
      const menu: string[] = menuByRole.auth[user.role] as string[]
      menuList.push(...menu, ...menuByRole.auth.always)
    } else {
      menuList.push(...menuByRole.nonAuth)
    }
    return menuList.map((item: string) => <NavButton key={item} href={item} label={t(`menu.${item}`)} />)
  }, [])

  return (
    <MenuContainer>
      <Menu secondary className="pr-2">
        {buildMenu}
      </Menu>
    </MenuContainer>
  )
}
