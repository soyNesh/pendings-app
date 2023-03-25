import { Container as MuiContainer } from '@mui/material'

const Container = ({ children, ...rest }) => {
  return <MuiContainer {...rest}>{children}</MuiContainer>
}

export default Container
