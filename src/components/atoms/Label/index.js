import { Typography } from '@mui/material'

const Label = ({ children, ...rest }) => {
  return (
    <Typography variant="h6" {...rest}>
      {children}
    </Typography>
  )
}

export default Label
