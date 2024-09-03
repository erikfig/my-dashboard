import { ReactNode, HTMLAttributes } from 'react'

export type ButtonProps = {
  children?: ReactNode,
} & HTMLAttributes<HTMLButtonElement>

export const Button = ({ children }: ButtonProps) => (
  <button type="button" className="text-white bg-primary hover:bg-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300">
    {children}
  </button>
)
