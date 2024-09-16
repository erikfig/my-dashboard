import { ReactNode, HTMLAttributes, HTMLProps, createElement } from 'react'
import { Spinner } from '../spinner'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & HTMLProps<HTMLAnchorElement> & {
  children?: ReactNode,
  type?: "button" | "submit" | "reset",
  color?: string,
  isLoading?: boolean,
}

export const Button = ({ children, className, color, isLoading, ...props }: ButtonProps) => {
  let tag = 'button'
  let localClassName = 'text-white disabled:bg-dark hover:bg-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300'
  let localChildren = children

  if (props.href) {
    tag = 'a'
  }

  if (className) {
    localClassName = `${localClassName} ${className}`
  }

  if (isLoading) {
    localChildren = (
      <div className='flex gap-2 items-center'>
        <Spinner />
        <div>{children}</div>
      </div>
    )
  }

  localClassName = `${localClassName} ${color ? color : `bg-primary`}`

  return createElement(tag, { ...props, className: localClassName }, localChildren)
}
