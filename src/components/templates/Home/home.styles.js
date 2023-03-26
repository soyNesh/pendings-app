import { styled } from '@mui/material'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'

const HomeContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`

const PendingsContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const CountersContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const AddButton = styled(Button)`
  align-self: flex-end;
`

export { HomeContainer, PendingsContainer, CountersContainer, AddButton }
