import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string
}

export default function getFormErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {}

  err.inner.forEach(error => {
    validationErrors[error.path || 'error'] = error.message
  })

  return validationErrors
}
