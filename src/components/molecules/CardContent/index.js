import {
  CardDescription,
  CardTitle,
  StyledCardContent,
} from './cardContent.styles'

const CardContent = ({ title, description }) => {
  return (
    <StyledCardContent>
      <CardTitle variant="h5" gutterBottom>{title}</CardTitle>
      <CardDescription paragraph gutterBottom>{description}</CardDescription>
    </StyledCardContent>
  )
}

export default CardContent
