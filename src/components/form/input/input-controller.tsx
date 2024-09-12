/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Control, Controller, FieldErrors,
} from 'react-hook-form'
import { Input, InputProps } from './input'

type InputControllerProps = {
  control: Control<any>
  name: keyof FieldErrors
  errors: FieldErrors<any>
  size?: number
} & InputProps

export const InputController = ({
  name, control, errors, size, ...props
}: InputControllerProps) => (
  <Controller
    name={name ?? ''}
    control={control}
    render={({ field: { value, onChange } }) => (
      <Input
        name={name}
        value={value as unknown as string || ''}
        error={!!errors?.[name]}
        helpText={<>{errors?.[name]?.message}</>}
        onChange={onChange}
        width={size ? '100%' : props.width}
        {...props}
      />
    )}
  />
)

