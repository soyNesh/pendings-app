import { Typography } from '@mui/material'

const Paragraph = ({ children, ...rest }) => {
  return (
    <Typography {...rest} paragraph>
      {children}
    </Typography>
  )
}

export default Paragraph
