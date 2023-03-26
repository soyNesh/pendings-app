import { useSelector } from 'react-redux'
import PendingForm from '../../molecules/PendingForm'
import { StyledModal } from './modal.styles'

const Modal = () => {
  const {
    pendings: { isModalOpen },
  } = useSelector((state) => state)

  return (
    <StyledModal open={isModalOpen}>
      <PendingForm />
    </StyledModal>
  )
}

export default Modal
