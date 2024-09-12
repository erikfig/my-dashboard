import { InputProps } from '..'

export const Radio = ({ options, name, label, value, ...props }: InputProps) => {
  return (
    <div>
      {options?.map((opt) => (
        <div className="flex items-center mt-4 pl-4">
          <input id={`${name}-${opt.value}`} checked={value === opt.value} type="radio" value={opt.value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" {...props} />
          <label htmlFor={`${name}-${opt.value}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt.label}</label>
        </div>
      ))}
    </div>
  )
}
