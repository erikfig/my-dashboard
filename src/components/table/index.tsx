import { DetailedHTMLProps, ReactNode, TdHTMLAttributes } from 'react'

export type Column = {
  title: string,
  field: string,
  render?: (data: any) => ReactNode,
} & DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableCellElement>

type Row = any

export type TableProps = {
  columns: Column[],
  rows?: Row[],
  isLoading?: boolean,
}

export const Table = ({ columns, rows, isLoading }: TableProps) => {
  return (
    <table className="table-auto w-full text-left">
      <thead className='border-b border-neutral-300 dark:border-neutral-800 text-xs text-neutral-700 uppercase dark:bg-neutral-700 dark:text-neutral-400'>
        <tr>
          {columns.map((col) => <th className='px-6 py-3 font-light'>{col.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {!isLoading && rows?.map((row) => (
          <tr className="border-b border-neutral-300 dark:border-neutral-700">
            {columns.map(({ field, render, className, ...props }) => (
              <td className={`px-6 py-4${className ? ` ${className}` : ''}`} {...props}>{render ? render(row) : row[field]}</td>
            ))}
          </tr>
        ))}
        {isLoading && (
          <tr className="border-b border-neutral-300 dark:border-neutral-700 dark:text-neutral-700 text-neutral-400 text-center">
            <td className={`px-6 py-4`} colSpan={columns.length}>Carregando...</td>
          </tr>
        )}
        {!isLoading && (!rows || rows.length === 0) && (
          <tr className="border-b border-neutral-300 dark:border-neutral-700 dark:text-neutral-700 text-neutral-400 text-center">
            <td className={`px-6 py-4`} colSpan={columns.length}>Nenhum registro encontrado</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}