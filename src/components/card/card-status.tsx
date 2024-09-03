import { Typography } from '../Typography'
import { Card } from './default'

type CardStatusProps = {
  title: string,
  message?: string,
  status: 'danger' | 'warning' | 'success' | 'info',
}

const icons = {
  danger: 'error',
  success: 'check_circle',
  warning: 'warning',
  info: 'info',
}

export const CardStatus = ({ title, message, status }: CardStatusProps) => (
  <Card className={`flex flex-row justify-between !py-4 !bg-${status} text-white`}>
    <div>
      <Typography type="h5">{title}</Typography>
      <Typography type="h2" className="font-bold">{message}</Typography>
    </div>
    <div className="chart">
      <span className="material-symbols-outlined !text-6xl">{icons[status]}</span>
    </div>
  </Card>
)
