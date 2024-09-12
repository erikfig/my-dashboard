import ReactSelect, { Props } from 'react-select'
import { InputProps } from '..'

type SelectProps = InputProps & Props

export const Select = ({ options, name, error, className, label, helpText, value, onChange, ...props }: SelectProps) => {
  return (
    <>
      <ReactSelect
        id={name}
        options={options}
        value={options ? options?.filter((opt) => Array.isArray(value) ? value.includes(opt.value) : opt.value === value) : []}
        onChange={(e: any) => {
          if (Array.isArray(e) && onChange) {
            onChange({ target: { value: e.map((item: any) => item.value) } } as any)
            return
          }

          if (onChange) {
            onChange({ target: { value: e?.value } } as any)
          }
        }}
        isSearchable
        isClearable
        className={`react-select-container${error ? ' error' : ''}`}
        classNamePrefix="react-select"
        {...props}
      />
    </>
  )
}
