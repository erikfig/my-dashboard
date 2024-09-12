import { ReactNode, TextareaHTMLAttributes } from 'react'
import { resolveClassName } from '../input-field'

type TextareaProps = {
  children?: ReactNode
  rows?: number
  label?: string
  helpText?: ReactNode
  error?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ children, rows, name, label, helpText, className, error, ...props }: TextareaProps) => {
  const localClassName = resolveClassName({ error, className })

  return (
    <div>
      <div className="flex items-center mt-4">
        <textarea id={name} rows={rows} className={localClassName} {...props}>{children}</textarea>
      </div>
    </div>
  )
}
