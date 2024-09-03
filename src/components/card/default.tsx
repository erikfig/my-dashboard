import { createElement, HTMLAttributes, ReactNode } from 'react'

export type CardProps = {
  children: ReactNode,
  type?: string,
  label?: string,
} & HTMLAttributes<HTMLDivElement>

export const Card = ({ children, type, className, ...props }: CardProps) => {
  let localType: string = type ?? 'div'
  const localClassName = `relative overflow-hidden m-6 p-8 shadow-2xl rounded-2xl bg-light dark:bg-neutral-800 ${className}`

  return createElement(localType, { ...props, className: localClassName }, children)
}
