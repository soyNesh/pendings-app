// Get data from Local Storage
export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return null
}

// Save data to Local Storage
export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
