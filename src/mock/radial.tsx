import { ApexOptions } from 'apexcharts'
import { Charts } from '@components'

export const Radial = () => {
  const series = [44, 55, 67, 83]
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 350
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              return `${249}`
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  }

  return (
    <Charts options={options} series={series} type="radialBar" height={420} />
  )
}