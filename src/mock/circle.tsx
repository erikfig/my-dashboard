import { ApexOptions } from 'apexcharts'
import { Charts } from '@components'
import { useDarkMode } from '@contexts/dark-mode'

export const Circle = ({ color, value }: { color: string, value: number }) => {
  const { isDarkMode } = useDarkMode()

  const series = [value]

  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          show: true,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            offsetY: 5,
          }
        }
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    stroke: {
      lineCap: 'round',
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    colors: [color],
  }

  return (
    <Charts options={options} series={series} type="radialBar" height={180} width={180} isDarkMode={isDarkMode} />
  )
}