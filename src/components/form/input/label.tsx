type LabelProps = {
  label: string
  name?: string
}

export const Label = ({ name, label }: LabelProps) =>
  <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>