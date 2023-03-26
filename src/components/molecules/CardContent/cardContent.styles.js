import { CardContent, styled } from '@mui/material'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'

const StyledCardContent = styled(CardContent)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const DragButton = styled(Button)`
  align-self: flex-end;
`

const CardTitle = styled(Text)`
  font-weight: bold;
`

const CardDescription = styled(Text)`
  text-align: justify;
`

const CardDueDate = styled(Text)``

export {
  StyledCardContent,
  DragButton,
  CardTitle,
  CardDescription,
  CardDueDate,
}
