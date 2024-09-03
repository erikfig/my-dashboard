import { DefaultLayout } from '@layouts/default/default.layout'
import { Radial } from './mock/radial'
import { Bar } from './mock/bar'
import { Circle } from './mock/circle'
import { Typography } from './components/Typography'
import { Card, CardBackground } from './components/card'
import { CardStatus } from './components/card/card-status'
import { Button } from './components/button'

function App() {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-3">
        <Card className="flex flex-row justify-between !py-4">
          <div>
            <Typography type="h5">Likes (30 days)</Typography>
            <Typography type="h2" className="font-bold">65.000,00</Typography>
          </div>
          <div className="chart">
            <Circle color="#e74c3c" value={70} />
          </div>
        </Card>

        <Card className="flex flex-row justify-between !py-4">
          <div className="info">
            <Typography type="h5">Story views</Typography>
            <Typography type="h2" className="font-bold">8.000</Typography>
          </div>
          <div className="chart">
            <Circle color="#2ecc71" value={90} />
          </div>
        </Card>

        <Card className="flex flex-row justify-between !py-4">
          <div className="info">
            <Typography type="h5">New folowers</Typography>
            <Typography type="h2" className="font-bold">300</Typography>
          </div>
          <div className="chart">
            <Circle color="#3498db" value={45} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4">
        <CardStatus title="Error Card" message="Error Message" status="danger" />
        <CardStatus title="Warning Card" message="Warning Message" status="warning" />
        <CardStatus title="Success Card" message="Success Message" status="success" />
        <CardStatus title="Info Card" message="Info Message" status="info" />
      </div>

      <div className="grid grid-cols-12">
        <Card className="col-span-4">
          <Typography type='h3'>Titulo h3</Typography>
          <Radial />
        </Card>

        <Card className="col-span-8">
          <Typography type='h3'>Titulo h3</Typography>
          <Bar />
        </Card>
      </div>

      <div className="grid grid-cols-12">
        {/* TODO: Criar component de card com table (data-table) */}
        <Card className="col-span-8 !p-0">
          <Typography type='h3' className='p-4'>Last Users</Typography>

          {/* TODO: Criar component de table */}
          <table className="table-auto w-full text-left">
            <thead className='border-b border-neutral-300 dark:border-neutral-800 text-xs text-neutral-700 uppercase dark:bg-neutral-700 dark:text-neutral-400'>
              <tr>
                <th className='px-6 py-3 font-light'>#</th>
                <th className='px-6 py-3 font-light'>name</th>
                <th className='px-6 py-3 font-light'>email</th>
                <th className='px-6 py-3 font-light'>views</th>
                <th className='px-6 py-3 font-light'></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 transition-all">
                <td className="px-6 py-4">#1</td>
                <td className="px-6 py-4">Name</td>
                <td className="px-6 py-4">name@email.com</td>
                <td className="px-6 py-4">130</td>
                <td className="px-6 py-4 text-right">
                  <Button>Edit</Button>
                </td>
              </tr>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 transition-all">
                <td className="px-6 py-4">#2</td>
                <td className="px-6 py-4">Name</td>
                <td className="px-6 py-4">name@email.com</td>
                <td className="px-6 py-4">130</td>
                <td className="px-6 py-4 text-right">
                  <Button>Edit</Button>
                </td>
              </tr>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 transition-all">
                <td className="px-6 py-4">#3</td>
                <td className="px-6 py-4">Name</td>
                <td className="px-6 py-4">name@email.com</td>
                <td className="px-6 py-4">130</td>
                <td className="px-6 py-4 text-right">
                  <Button>Edit</Button>
                </td>
              </tr>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 transition-all">
                <td className="px-6 py-4">#4</td>
                <td className="px-6 py-4">Name</td>
                <td className="px-6 py-4">name@email.com</td>
                <td className="px-6 py-4">130</td>
                <td className="px-6 py-4 text-right">
                  <Button>Edit</Button>
                </td>
              </tr>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 transition-all">
                <td className="px-6 py-4">#5</td>
                <td className="px-6 py-4">Name</td>
                <td className="px-6 py-4">name@email.com</td>
                <td className="px-6 py-4">130</td>
                <td className="px-6 py-4 text-right">
                  <Button>Edit</Button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* TODO: Criar component de paginação */}
          <nav className='flex justify-between items-center py-4 px-8'>
            <Typography type='display' className='text-xs'>Showing 5 of 22</Typography>
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 border border-e-0 border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-primary border border-neutral-300 bg-light-50 hover:bg-light-100 hover:text-light-700 dark:border-neutral-700 dark:bg-neutral-700">3</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </Card>

        <Card className="col-span-4 !bg-transparent">
          <CardBackground src="/programmer.jpeg" className="bg-dark/80 text-white">
            <Typography type="h2">Titulo h2</Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat quam ligula, at posuere tortor mattis nec. Maecenas commodo ante sed est elementum fermentum. Aliquam erat volutpat. Sed sit amet congue dolor.</p>
          </CardBackground>
        </Card>
      </div>
    </DefaultLayout>
  )
}

export default App
