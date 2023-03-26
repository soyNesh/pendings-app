import { TextField } from '@mui/material'

const Input = ({ children, type, label, id, required, name, ...rest }) => {
  return (
    <TextField
      variant="standard"
      id={id}
      name={name}
      label={label}
      type={type}
      required={required}
      {...rest}
    >
      {children}
    </TextField>
  )
}

export default Input
