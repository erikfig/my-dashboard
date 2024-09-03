import { Radial } from '../mock/radial'
import { Bar } from '../mock/bar'
import { Circle } from '../mock/circle'
import { Typography } from '../components/Typography'
import { Card, CardBackground } from '../components/card'
import { CardStatus } from '../components/card/card-status'
import { Button } from '../components/button'
import { DataTableAsync } from '../components/data-table/data-table-async'
import { ExampleRequest } from '../hooks/example-request'

export const Home = () => {
  // Configuração de exibição do DataTable
  const columns = [
    {
      title: '#',
      field: 'id',
      render: (data: any) => `#${data.id}`
    },
    { title: 'Name', field: 'name' },
    { title: 'email', field: 'email' },
    { title: 'views', field: 'views' },
    {
      title: '',
      field: 'id',
      className: 'text-right',
      render: () => (
        <>
          <Button>Edit</Button>
        </>
      ),
    },
  ]

  // Dados para o DataTable (simula request)
  const { query, setPage } = ExampleRequest()

  return (
    <>
      <div className="grid grid-cols-3">
        <Card className="flex flex-row justify-between !py-4 items-center">
          <div>
            <Typography type="h5">Likes (30 days)</Typography>
            <Typography type="h2" className="font-bold">65.000,00</Typography>
          </div>
          <div className="chart">
            <Circle color="#e74c3c" value={70} />
          </div>
        </Card>

        <Card className="flex flex-row justify-between !py-4 items-center">
          <div className="info">
            <Typography type="h5">Story views</Typography>
            <Typography type="h2" className="font-bold">8.000</Typography>
          </div>
          <div className="chart">
            <Circle color="#2ecc71" value={90} />
          </div>
        </Card>

        <Card className="flex flex-row justify-between !py-4 items-center">
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
        <DataTableAsync title='Last Users' query={query} columns={columns} onChange={(p) => setPage(p)} />

        <Card className="col-span-4 !bg-transparent">
          <CardBackground src="/programmer.jpeg" className="bg-dark/80 text-white">
            <Typography type="h2" className='mb-4'>Erik Figueiredo</Typography>
            <Typography>Desenvolvedor FullStack Sênior com mais de 15 anos de experiência, especializado em Node.js, TypeScript e PHP.</Typography>
            <Button href="https://erikfigueiredo.com.br/" target="blank"><span className="material-symbols-outlined">link</span> Site</Button>
          </CardBackground>
        </Card>
      </div>
    </>
  )
}
