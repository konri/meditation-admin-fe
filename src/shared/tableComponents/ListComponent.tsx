import React from 'react'
import { List } from 'semantic-ui-react'
import ScrollContainer from './ScrollContainer'

export default function ListComponent(items: Array<string>) {
  if (items && items.length > 0) {
    const rows = items.map((item) => <List.Item key={item}>{item}</List.Item>)
    return (
      <ScrollContainer scroll={items.length > 6} maxHeight="200px">
        <List bulleted>{rows}</List>
      </ScrollContainer>
    )
  }

  return <span>-</span>
}
