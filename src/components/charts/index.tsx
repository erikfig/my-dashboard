import ReactApexChart, { Props } from 'react-apexcharts'
import { useDarkMode } from '../../contexts/dark-mode'

export const Charts = ({ options, ...props }: Props) => {
  const { isDarkMode } = useDarkMode()

  const localOptions: Props['options'] = {
    ...options,
    theme: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    chart: {
      background: 'transparent',
      ...options?.chart,
    },
  }
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={localOptions} {...props} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}