import { Typography } from '@mui/material'

const Text = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>
}

export default Text