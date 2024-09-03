import { ReactNode } from 'react'
import { RoundedWrapper } from './style'

export type RoundedProps = {
  children: ReactNode,
}

export const Rounded = ({ children }: RoundedProps) => {
  return <RoundedWrapper>{children}</RoundedWrapper>
}
