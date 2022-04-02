import React, { useState } from 'react'

type propTypes = {
  labelOn: string
  labelOff: string
}
const CheckboxWithLabel = ({ labelOn, labelOff }: propTypes) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  )
}

export default CheckboxWithLabel
