import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

export type InputFieldProps = {
  label?: string
  type?: HTMLInputTypeAttribute
  error?: boolean
  isLoading?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const classNameTemplate = 'bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
const classNameErrorTemplate = '!border-red-500 !outline-red-500'

export const resolveClassName = ({ className, error }: Partial<InputFieldProps>): string => {
  let localClassName = classNameTemplate

  if (className) {
    localClassName = `${localClassName} ${className}`
  }

  if (error) {
    localClassName = `${localClassName} ${classNameErrorTemplate}`
  }

  return localClassName
}

export const InputField = ({ type, error, className, ...props }: InputFieldProps) => {
  const localClassName = resolveClassName({ error, className })

  return (
    <input
      type={type ?? 'text'}
      className={localClassName}
      {...props}
    />
  )
}
