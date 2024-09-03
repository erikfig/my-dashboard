import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom'
import { RouteConfigItem, RoutesConfig } from '@config/routes'
import { createElement, useCallback } from 'react'

export const Router = () => {
  const routeMaker = useCallback((route: RouteConfigItem) => {
    if (route.layout) {
      const layoutElement = createElement(route.layout, route.props)
      return (
        <Route path={route.path} element={layoutElement} key={JSON.stringify(route)}>
          <Route path={route.path} element={route.element} id={route.id} key={`${JSON.stringify(route)}-child`} />
          {route.children
            && route.children.length > 0
            && route.children.map((children) => routeMaker(children))}
        </Route>
      )
    }
    return <Route path={route.path} element={route.element} key={JSON.stringify(route)} />
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_APP ? import.meta.env.VITE_BASE_APP : '/'}>
      <Routes key="routes-root">
        {RoutesConfig.map(routeMaker)}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
