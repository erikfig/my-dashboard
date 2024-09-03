import { createElement, HTMLAttributes, ReactNode } from 'react'

export type TypographyProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'display' | undefined,
  children: ReactNode,
} & HTMLAttributes<HTMLDivElement>

export const Typography = ({ children, type = 'p', ...props }: TypographyProps) => {
  let localType: string = type

  const typeClasses = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-base',
    h6: 'text-sm',
    p: 'text-base mb-6',
    span: 'text-sm',
    display: 'text-base',
  }

  const className = [typeClasses[type]]

  if (props.className) {
    className.push(props.className)
  }

  if (type === 'display') {
    localType = 'div'
  }

  return createElement(localType, { ...props, className: className.join(' ') }, children)
}
