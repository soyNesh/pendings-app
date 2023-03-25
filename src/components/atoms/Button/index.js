import { Button as MuiButton } from '@mui/material'

const StyledButton = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>
}

export default StyledButton
