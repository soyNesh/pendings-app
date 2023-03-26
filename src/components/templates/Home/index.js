import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import Counter from '../../molecules/Counter'
import Card from '../../organisms/Card'
import Modal from '../../organisms/Modal'
import { openModal } from '../../../features/pendings/pendingsSlice'
import {
  AddButton,
  CountersContainer,
  HomeContainer,
  PendingsContainer,
} from './home.styles'

const Home = () => {
  const {
    pendings: { activePendings, donePendings },
  } = useSelector((state) => state)

  const sortedActivePendings = activePendings
    .slice()
    .sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    )

  const dispatch = useDispatch()

  return (
    <HomeContainer>
      <PendingsContainer>
        {sortedActivePendings.map((pending) => (
          <Card key={pending.id} data={pending} />
        ))}
      </PendingsContainer>
      <CountersContainer>
        <Counter label="Active" count={activePendings.length} />
        <Counter label="Done" count={donePendings.length} />
      </CountersContainer>
      <AddButton
        type="floating"
        color="primary"
        onClick={() => dispatch(openModal())}
      >
        <AddIcon />
      </AddButton>
      <Modal />
    </HomeContainer>
  )
}

export default Home
