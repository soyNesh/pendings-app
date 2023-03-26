import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import {
  CardDescription,
  CardDueDate,
  CardTitle,
  DragButton,
  StyledCardContent,
} from './cardContent.styles'

const CardContent = ({ title, description, dueDate }) => {
  return (
    <StyledCardContent>
      <DragButton type="icon" id="dragButton">
        <DragIndicatorIcon />
      </DragButton>
      <CardTitle variant="h5" gutterBottom>
        {title}
      </CardTitle>
      <CardDescription paragraph gutterBottom>
        {description}
      </CardDescription>
      <CardDueDate>Due date: {dueDate}</CardDueDate>
    </StyledCardContent>
  )
}

export default CardContent
