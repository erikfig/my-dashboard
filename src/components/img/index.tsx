import { ImgHTMLAttributes, useEffect, useState } from 'react'

type ImgProps = ImgHTMLAttributes<HTMLImageElement>

export const Img = ({ src, ...props }: ImgProps) => {
  const [localSrc, setLocalSrc] = useState<string>('')

  useEffect(() => {
    setLocalSrc(`${import.meta.env.VITE_BASE_APP ? import.meta.env.VITE_BASE_APP : '/'}${src}`)
  }, [src])

  return <img src={localSrc} {...props} />
}