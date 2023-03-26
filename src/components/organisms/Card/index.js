import { useRef } from 'react'
import Draggable from 'react-draggable'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import Button from '../../atoms/Button'
import CardActions from '../../molecules/CardActions'
import CardContent from '../../molecules/CardContent'
import {
  finishPending,
  removePending,
} from '../../../features/pendings/pendingsSlice'
import StyledCard from './card.styles'

const Card = ({ data }) => {
  const nodeRef = useRef(null)

  const { title, description, dueDate } = data

  const dispatch = useDispatch()

  const isTodayOrTomorrow = () => {
    const dDate = new Date(dueDate)

    return dDate.getTime() - new Date().getTime() <= 86400000
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <StyledCard
        ref={nodeRef}
        sx={isTodayOrTomorrow() ? { background: '#FFD6D6' } : null}
      >
        <CardContent title={title} description={description} />
        <CardActions>
          <Button
            type="icon"
            color="primary"
            onClick={() => dispatch(finishPending(data))}
          >
            <DoneIcon />
          </Button>
          <Button
            type="icon"
            color="error"
            onClick={() => dispatch(removePending(data))}
          >
            <DeleteIcon />
          </Button>
        </CardActions>
      </StyledCard>
    </Draggable>
  )
}

export default Card
