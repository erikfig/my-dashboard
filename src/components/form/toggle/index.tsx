import { ReactNode } from 'react'

type ToggleProps = {
  checked?: boolean,
  onClick?: () => void,
  children?: ReactNode,
}

export const Toggle = ({ checked, onClick, children }: ToggleProps) => (
  <label className="inline-flex items-center me-5 cursor-pointer" >
    <input type="checkbox" className="sr-only peer" checked={checked} onClick={onClick} />
    <div className="relative min-w-[44px] h-6 bg-neutral-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    <span className="ms-3 text-sm font-medium">{children}</span>
  </label>
)
