import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Toolbar } from '@mui/material'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import STRINGS from '../../../utils/strings'

const { title } = STRINGS

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button type="icon">
          <MenuIcon />
        </Button>
        <Text variant="h6">{title}</Text>
      </Toolbar>
    </AppBar>
  )
}

export default Header
