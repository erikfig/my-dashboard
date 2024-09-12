import { ReactNode, HTMLAttributes, HTMLProps, createElement } from 'react'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & HTMLProps<HTMLAnchorElement> & {
  children?: ReactNode,
  type?: "button" | "submit" | "reset",
  color?: string,
}

export const Button = ({ children, className, color, ...props }: ButtonProps) => {
  let tag = 'button'
  let localClassName = 'text-white disabled:bg-dark hover:bg-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300'

  if (props.href) {
    tag = 'a'
  }

  if (className) {
    localClassName = `${localClassName} ${className}`
  }

  localClassName = `${localClassName} ${color ? color : `bg-primary`}`

  return createElement(tag, { ...props, className: localClassName }, children)
}
