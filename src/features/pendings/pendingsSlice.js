import { createSlice } from '@reduxjs/toolkit'
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../utils/localStorage'

export const pendingsSlice = createSlice({
  name: 'pendings',
  initialState: {
    isModalOpen: false,
    activePendings: getDataFromLocalStorage('activePendings') || [],
    donePendings: getDataFromLocalStorage('donePendings') || [],
    deletedPendings: getDataFromLocalStorage('deletedPendings') || [],
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
    addPending: (state, action) => {
      const { status } = action.payload

      switch (status) {
        case 'done':
          state.donePendings.push(action.payload)
          saveDataToLocalStorage('donePendings', state.donePendings)
          break
        case 'deleted':
          state.deletedPendings.push(action.payload)
          saveDataToLocalStorage('deletedPendings', state.deletedPendings)
          break
        default:
          state.activePendings.push(action.payload)
          saveDataToLocalStorage('activePendings', state.activePendings)
          break
      }
    },
    finishPending: (state, action) => {
      const updatedElements = state.activePendings.filter(
        (pending) => pending.id !== action.payload.id
      )
      state.donePendings.push(action.payload)
      saveDataToLocalStorage('donePendings', state.donePendings)
      state.activePendings = updatedElements
      saveDataToLocalStorage('activePendings', state.activePendings)
    },
    removePending: (state, action) => {
      const updatedElements = state.activePendings.filter(
        (pending) => pending.id !== action.payload.id
      )
      state.deletedPendings.push(action.payload)
      saveDataToLocalStorage('deletedPendings', state.deletedPendings)
      state.activePendings = updatedElements
      saveDataToLocalStorage('activePendings', state.activePendings)
    },
  },
})

export const {
  openModal,
  closeModal,
  addPending,
  finishPending,
  removePending,
} = pendingsSlice.actions

export default pendingsSlice.reducer
