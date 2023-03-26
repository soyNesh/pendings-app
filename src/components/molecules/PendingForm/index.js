import { format } from 'date-fns'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import MenuItem from '@mui/material/MenuItem'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import {
  addPending,
  closeModal,
} from '../../../features/pendings/pendingsSlice'
import {
  ButtonsContainer,
  DatePicker,
  FormContainer,
} from './pendingForm.styles'

const priorities = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
]

const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' },
  { value: 'deleted', label: 'Deleted' },
]

const PendingForm = () => {
  const [formValues, setFormValues] = useState({
    priority: 1,
    title: '',
    description: '',
    status: 'active',
    dueDate: format(new Date(), 'yyyy-MM-dd'),
  })

  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const {
    pendings: { activePendings },
  } = useSelector((state) => state)

  const handleFormChange = (event) => {
    const { name, value } = event.target

    if (name === 'title') {
      setTitleError(false)
    } else if (name === 'description') {
      setDescriptionError(false)
    }

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (formValues.title === '') {
      setTitleError(true)
      return false
    } else if (formValues.description === '') {
      setDescriptionError(true)
      return false
    }
    return true
  }

  const validateDescription = () => {
    return activePendings.some(
      (activePending) => activePending.description === formValues.description
    )
      ? setDescriptionError(true)
      : setDescriptionError(false)
  }

  const dispatch = useDispatch()

  return (
    <FormContainer>
      <Input
        name="priority"
        select
        label="Priority"
        helperText="Please select a priority"
        fullWidth
        required
        onChange={handleFormChange}
        value={formValues.priority}
      >
        {priorities.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Input>
      <Input
        name="title"
        label="Title"
        helperText="Please enter a title"
        fullWidth
        required
        error={titleError}
        onChange={handleFormChange}
        value={formValues.title}
      />
      <Input
        name="description"
        label="Description"
        helperText={
          descriptionError
            ? 'Descriptions can not be duplicated'
            : 'Please enter a description'
        }
        fullWidth
        required
        error={descriptionError}
        onChange={handleFormChange}
        onBlur={validateDescription}
        value={formValues.description}
      />
      <Input
        name="status"
        select
        label="Status"
        helperText="Please select a status"
        fullWidth
        required
        onChange={handleFormChange}
        value={formValues.status}
      >
        {statuses.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Input>
      <DatePicker
        type="date"
        name="dueDate"
        helperText="Please select a due date"
        fullWidth
        required
        onChange={handleFormChange}
        value={formValues.dueDate}
      />
      <ButtonsContainer>
        <Button
          onClick={() => {
            if (validateForm()) {
              dispatch(
                addPending({
                  ...formValues,
                  id: uuidv4(),
                })
              )
              dispatch(closeModal())
            }
          }}
        >
          Add
        </Button>
        <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
      </ButtonsContainer>
    </FormContainer>
  )
}

export default PendingForm
