import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export const ExampleRequest = () => {
  const [page, setPage] = useState(1)

  const rows = [
    {
      id: 1,
      name: 'Name',
      email: 'name@email.com',
      views: 130,
    },
    {
      id: 2,
      name: 'Name',
      email: 'name@email.com',
      views: 130,
    },
    {
      id: 3,
      name: 'Name',
      email: 'name@email.com',
      views: 130,
    },
    {
      id: 4,
      name: 'Name',
      email: 'name@email.com',
      views: 130,
    },
    {
      id: 5,
      name: 'Name',
      email: 'name@email.com',
      views: 130,
    },
  ]

  const getData = (p: number) =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ total: 27, page: p, perPage: 5, data: rows }), 1000)
    })

  const query = useQuery({
    queryKey: ['rows', page],
    queryFn: () => getData(page),
  })

  return {
    query, setPage
  }
}