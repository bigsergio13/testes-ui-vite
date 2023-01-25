import React from 'react'
import { Aprove, Container, ContainerButtons, DateDelivery, Edit, Remove, Status, Subtitle, Title } from './styles'

export default function Card({ id, type, company, dateDelivery }:any) {
  return (
    <Container>
      <Status>Pendente</Status>
        {/* <ContainerButtons>
          <Remove>❌</Remove>
          <Edit>✏️</Edit>
          <Aprove>✔️</Aprove>
        </ContainerButtons> */}
        <Title>{company}</Title>
        <Subtitle>{type}</Subtitle>
        <DateDelivery>
            <img src="https://cdn-icons-png.flaticon.com/512/833/833593.png" width={16} alt="" />
            <span>{dateDelivery}</span>
        </DateDelivery>
        
    </Container>
  )
}
