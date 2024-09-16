import { Card } from '../card'
import { Pagination, PaginationProps } from '../pagination'
import { Table, TableProps } from '../table'
import { Typography } from '../typography'

type DataTableProps = { title?: string } & TableProps & PaginationProps

export const DataTable = ({ title, columns, rows, perPage, current, total, onChange, isLoading }: DataTableProps) => (
  <Card className="col-span-8 !p-0 !overflow-auto">
    {title &&
      <Typography type='h3' className='p-4'>{title}</Typography>
    }

    <Table
      columns={columns}
      rows={rows}
      isLoading={isLoading}
    />

    <Pagination count={rows?.length} current={current ?? 1} total={total ?? 1} perPage={perPage ?? 1} onChange={onChange} disabled={isLoading} />
  </Card>
)