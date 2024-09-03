import { HTMLAttributes, ReactNode } from 'react'

export type CardBackgroundProps = {
  children?: ReactNode,
  src: string,
} & HTMLAttributes<HTMLDivElement>

export const CardBackground = ({ children, src, className, ...props }: CardBackgroundProps) => {
  return (
    <>
      <img className="absolute w-full top-0 left-0 z-0" src={src} />
      {children && <div className={`relative -m-8 p-6 ${className}`} {...props}>{children}</div>}
    </>
  )
}
