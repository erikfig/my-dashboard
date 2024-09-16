import { ReactNode, useEffect, useState } from 'react'
import { InputField, InputFieldProps } from './input-field'
import { Typography } from '../../typography'
import { Adapters } from './adapter'
import { Label } from './label'

export type Option = {
  value: any
  label: string
}

export type InputProps = InputFieldProps & {
  name: string
  label?: string
  helpText?: ReactNode
  options?: Option[]
  rows?: number
  isMulti?: boolean
}

export const Input = ({ label, helpText, type = 'text', options, onChange, ...props }: InputProps) => {
  const [hasAdapter, setHasAdapter] = useState<boolean>(false)

  useEffect(() => {
    setHasAdapter(!!Adapters[type])
  }, [type])

  let localHelpTextClassName = 'mt-2 !mb-0 text-sm text-gray-500 dark:text-gray-400'

  if (props?.error) {
    localHelpTextClassName += ' !text-red-500'
  }

  return (
    <div>
      {label && <Label name={props.name} label={label} />}
      <InputField type={hasAdapter ? 'hidden' : type} id={props.name} onChange={onChange} {...props} />
      {
        hasAdapter && Adapters[type]({ label, helpText, type, options, onChange, ...props })
      }
      {helpText &&
        <Typography id="helper-text-explanation" className={localHelpTextClassName}>{helpText}</Typography>
      }
    </div>
  )
}
