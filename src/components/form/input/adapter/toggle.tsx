import { InputProps } from '..'
import { Toggle as ToggleComponent } from '../../toggle'

export const Toggle = ({ options, value, onChange }: InputProps) => {
  return (
    <div>
      {options?.map((opt) => (
        <div className="flex items-center mt-4 pl-4">
          <ToggleComponent
            checked={Array.isArray(value) ? value.includes(opt.value) : opt.value === value}
            onClick={() => onChange ? onChange({ target: { value: opt.value } } as any) : ''}
          >
            {opt.label}
          </ToggleComponent>
        </div>
      ))}
    </div>
  )
}
