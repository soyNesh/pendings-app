import { Fab, IconButton, Button as MuiButton } from '@mui/material'

const Button = ({ type, children, ...rest }) => {
  switch (type) {
    case 'icon':
      return <IconButton {...rest}>{children}</IconButton>
    case 'floating':
      return <Fab {...rest}>{children}</Fab>
    default:
      return <MuiButton {...rest}>{children}</MuiButton>
  }
}

export default Button
