import Label from '../../atoms/Label'

const Counter = ({ label, count }) => {
  return (
    <Label>
      {label}: {count}
    </Label>
  )
}

export default Counter
