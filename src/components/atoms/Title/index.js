import { Typography } from '@mui/material'

const Title = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>
}

export default Title
