import React from 'react'
import { Title } from '../../components/styled-components/Title'
import { Card, Image } from 'semantic-ui-react'

export const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Title>Home dashboard</Title>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <Card>
          <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}
