import { useState } from 'react'

export const useForm = (initialValues = {}): any => {
  const [values, setValues] = useState(initialValues)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }
  const reset = (): void => {
    setValues(initialValues)
  }

  return [values, handleInputChange, reset]
}
