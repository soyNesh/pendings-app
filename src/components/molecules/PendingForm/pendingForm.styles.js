import { styled } from '@mui/material'
import Container from '../../atoms/Container'
import Input from '../../atoms/Input'

const FormContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  background: white;
  padding: 2rem;
`

const ButtonsContainer = styled(Container)`
  margin-top: 2rem;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: unset;
`

const DatePicker = styled(Input)`
  margin-top: 1rem;
`

export { FormContainer, ButtonsContainer, DatePicker }
