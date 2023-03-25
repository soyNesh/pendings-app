import { styled } from '@mui/material'
import Container from '../../atoms/Container'
import Title from '../../atoms/Title'
import STRINGS from '../../../utils/strings'

const { title } = STRINGS

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <StyledContainer>
      <Title variant="h1">{title}</Title>
    </StyledContainer>
  )
}

export default Home
