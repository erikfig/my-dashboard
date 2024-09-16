import { useCallback, useEffect, useState } from 'react'
import { Typography } from '../typography'

export type PaginationProps = {
  current: number,
  perPage: number,
  total: number,
  count?: number,
  disabled?: boolean,
  onChange?: (page: number) => void,
}

export const Pagination = ({ current, total, perPage, count, disabled, onChange }: PaginationProps) => {
  const [localCurrent, setLocalCurrent] = useState(current)

  const pages = Math.ceil(total / perPage)

  useEffect(() => {
    if (onChange) {
      onChange(localCurrent)
    }
  }, [localCurrent])

  const handleChangePage = useCallback((type: string, page?: number) => {

    if (disabled) return

    if (type === `change` && page !== undefined) {
      setLocalCurrent(page)
    }

    if (type === `increase` && localCurrent < pages) {
      setLocalCurrent(localCurrent + 1)
    }

    if (type === `decrease` && localCurrent > 1) {
      setLocalCurrent(localCurrent - 1)
    }

  }, [localCurrent, disabled])

  const classCurrent = `cursor-default flex items-center justify-center px-3 h-8 leading-tight text-primary border border-neutral-300 bg-light-50 hover:bg-light-100 hover:text-light-700 dark:border-neutral-700 dark:bg-neutral-700`
  const classItem = `flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white`

  const classActive = `flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white`
  const classDisabled = `cursor-default flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-700 border border-neutral-300 dark:border-neutral-700 dark:text-neutral-40`

  return (
    <nav className={`flex justify-between items-center py-4 px-8 ${disabled ? `opacity-50` : ''}`}>
      <Typography type='display' className='text-xs'>Mostrando {count ?? 0} de {total}</Typography>
      <ul className="flex items-center -space-x-px h-8 text-sm">

        <li>
          <a onClick={() => handleChangePage(`decrease`)} className={`${(!disabled && localCurrent > 1) ? classActive : classDisabled} rounded-s-lg`}>
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
          </a>
        </li>

        {Array(pages).fill(0).map((_, index) => (
          <li>
            <a onClick={() => handleChangePage(`change`, index + 1)} className={`${localCurrent === index + 1 ? classCurrent : classItem} ${disabled ? `cursor-default` : ''}`}>
              {index + 1}
            </a>
          </li>
        ))}

        <li>
          <a onClick={() => handleChangePage(`increase`)} className={`${(!disabled && localCurrent < pages) ? classActive : classDisabled} rounded-e-lg`}>
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}