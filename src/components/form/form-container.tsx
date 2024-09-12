import { FormHTMLAttributes, ReactNode } from 'react'

type FormProps = {
  children: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

export const FormContainer = ({ children, className, ...props }: FormProps) => {
  let localClassName = 'flex gap-6 flex-col'

  if (className) {
    localClassName += ` ${className}`
  }

  return <form className={localClassName} {...props}>{children}</form>
}
