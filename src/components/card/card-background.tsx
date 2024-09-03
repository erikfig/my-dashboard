import { HTMLAttributes, ReactNode } from 'react'

export type CardBackgroundProps = {
  children?: ReactNode,
  src: string,
} & HTMLAttributes<HTMLDivElement>

export const CardBackground = ({ children, src, className, ...props }: CardBackgroundProps) => {
  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
        <img className='w-full h-full object-cover' src={src} />
      </div>
      {children && <div className={`relative -m-8 p-6 ${className}`} {...props}>{children}</div>}
    </>
  )
}
