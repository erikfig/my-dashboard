import { DefaultLayout } from '@layouts/default/default.layout'
import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/home'
import { ReactNode } from 'react'

type RouteConfigItemProps = {
  title?: ReactNode,
  menuLabel?: string,
  menuIcon?: string,
}

export type RouteConfigItem = {
  layout?: (props: any) => JSX.Element,
  home?: boolean,
  props?: RouteConfigItemProps,
  children?: RouteConfigItem[],
} & RouteObject

export const RoutesConfig: RouteConfigItem[] = [
  {
    layout: DefaultLayout,
    path: '/',
    home: true,
    props: {
      title: <><span className="material-symbols-outlined">home</span> Titulo h1</>,
      menuLabel: 'Home',
      menuIcon: 'home',
    },
    element: <Home />,
  },
  {
    layout: DefaultLayout,
    path: '/item-1',
    props: {
      title: <><span className="material-symbols-outlined">home</span> Item 1</>,
      menuLabel: 'Item 1',
      menuIcon: 'home',
    },
    element: <>Item 1</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-2',
    props: {
      title: <><span className="material-symbols-outlined">check_circle</span> Item 2</>,
      menuLabel: 'Item 2',
      menuIcon: 'check_circle',
    },
    element: <>Item 2</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-3',
    props: {
      title: <><span className="material-symbols-outlined">key</span> Item 3</>,
      menuLabel: 'Item 3',
      menuIcon: 'key',
    },
    element: <>Item 3</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-4',
    props: {
      title: <><span className="material-symbols-outlined">keep_public</span> Item 4</>,
      menuLabel: 'Item 4',
      menuIcon: 'keep_public',
    },
    element: <>Item 4</>,
  },
  {
    props: {
      menuLabel: 'Titulo 1',
      menuIcon: 'thumb_up',
    },
  },
  {
    layout: DefaultLayout,
    path: '/item-6',
    props: {
      title: <><span className="material-symbols-outlined">switch_access</span> Item 6</>,
      menuLabel: 'Item 1',
      menuIcon: 'switch_access',
    },
    element: <>Item 6</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-7',
    props: {
      title: <><span className="material-symbols-outlined">clock_loader_80</span> Item 7</>,
      menuLabel: 'Item 2',
      menuIcon: 'clock_loader_80',
    },
    element: <>Item 7</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-8',
    props: {
      title: <><span className="material-symbols-outlined">expand_circle_right</span> Item 8</>,
      menuLabel: 'Item 3',
      menuIcon: 'expand_circle_right',
    },
    element: <>Item 8</>,
  },
]
