import { DefaultLayout } from '@layouts/default/default.layout'
import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/home'
import { ReactNode } from 'react'
import { NoTemplate } from '@pages/no-template'
import { Forms } from '@pages/forms'
import { LoginLayout } from '@layouts/default/login.layout'

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
      title: <><span className="material-symbols-outlined">home</span> Dashboard Home Page</>,
      menuLabel: 'Home',
      menuIcon: 'home',
    },
    element: <Home />,
  },
  {
    layout: DefaultLayout,
    path: '/form',
    props: {
      title: <><span className="material-symbols-outlined">input</span> Formulários</>,
      menuLabel: 'Formulários',
      menuIcon: 'input',
    },
    element: <Forms />,
  },
  {
    layout: LoginLayout,
    path: '/login',
    props: {
      title: <><span className="material-symbols-outlined">passkey</span> Login</>,
      menuLabel: 'Login',
      menuIcon: 'passkey',
    },
    element: <></>,
  },
  {
    path: '/empty',
    props: {
      title: <><span className="material-symbols-outlined">check_box_outline_blank</span> Sem Template</>,
      menuLabel: 'Sem Template',
      menuIcon: 'check_box_outline_blank',
    },
    element: <NoTemplate />,
  },
  {
    props: {
      menuLabel: 'Separador',
      menuIcon: 'thumb_up',
    },
  },
  {
    layout: DefaultLayout,
    path: '/item-1',
    props: {
      title: <><span className="material-symbols-outlined">switch_access</span> Item 1</>,
      menuLabel: 'Item 1',
      menuIcon: 'switch_access',
    },
    element: <>Item 1</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-2',
    props: {
      title: <><span className="material-symbols-outlined">clock_loader_80</span> Item 2</>,
      menuLabel: 'Item 2',
      menuIcon: 'clock_loader_80',
    },
    element: <>Item 2</>,
  },
  {
    layout: DefaultLayout,
    path: '/item-3',
    props: {
      title: <><span className="material-symbols-outlined">expand_circle_right</span> Item 3</>,
      menuLabel: 'Item 3',
      menuIcon: 'expand_circle_right',
    },
    element: <>Item 3</>,
  },
]
