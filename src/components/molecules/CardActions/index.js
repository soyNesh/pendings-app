import { CardActions as MuiCardActions } from '@mui/material'

const CardActions = ({ children, ...rest }) => {
  return (
    <MuiCardActions {...rest} sx={{ alignSelf: 'flex-end' }}>
      {children}
    </MuiCardActions>
  )
}

export default CardActions
