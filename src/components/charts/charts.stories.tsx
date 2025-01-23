import { Meta, StoryObj } from '@storybook/react';
import { Charts } from './index';
import { ApexOptions } from 'apexcharts'

const meta: Meta<typeof Charts> = {
  title: 'Components/Charts',
  component: Charts,
  argTypes: {
    type: {
      options: [
        'line',
        'area',
        'bar',
        'pie',
        'donut',
        'radialBar',
        'scatter',
        'bubble',
        'heatmap',
        'candlestick',
        'boxPlot',
        'radar',
        'polarArea',
        'rangeBar',
        'rangeArea',
        'treemap',
      ],
      control: { type: 'select' },
      description: 'Aceita tipos do ApexCharts. [Documentação da paleta](https://tailwindcss.com/docs/customizing-colors)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Charts>;

const series = [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}]

const options: ApexOptions = {}

export const Default: Story = {
  args: {
    options,
    series,
    type: 'bar',
  },
};

export const Radial: Story = {
  args: {
    options,
    series: [44, 55, 67, 83],
    type: 'radialBar',
  },
};

export const Circle: Story = {
  args: {
    options,
    series: [83],
    type: 'radialBar',
  },
};
