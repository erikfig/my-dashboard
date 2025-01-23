import { ImgHTMLAttributes, useEffect, useState } from 'react'

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>

export const Img = ({ src, ...props }: ImgProps) => {
  const [localSrc, setLocalSrc] = useState<string>('')

  useEffect(() => {
    if (src && !src.startsWith('http')) {
      setLocalSrc(`${import.meta.env.VITE_BASE_APP ? import.meta.env.VITE_BASE_APP : '/'}${src}`.replace('//', '/'))
    }
    if (src && src.startsWith('http')) {
      setLocalSrc(src)
    }
  }, [src])

  return <img src={localSrc} {...props} />
}