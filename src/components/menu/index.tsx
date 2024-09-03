import { MouseEventHandler, useEffect, useState } from 'react'
import { Card } from '../card'
import { useLocation } from 'react-router-dom'
import { RoutesConfig } from '@config/routes'

export type MenuItem = {
  label: string,
  icon?: string,
  path?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
  isTitle?: boolean,
}

type Menu = {
  items: MenuItem[]
}

type MenuProps = {
  menus: Menu[],
}

export const Menu = ({ menus }: MenuProps) => {
  const [currentRoute, setCurrentRoute] = useState<string>()
  const location = useLocation()

  const menuItem = 'py-4 px-4 block hover:bg-grey hover:dark:bg-neutral-700 hover:no-underline transition-all duration-500'
  const menuActive = 'py-4 px-4 block bg-primary hover:no-underline transition-all duration-500'

  useEffect(() => {
    RoutesConfig.find((route) => {
      if (route.path && route.path === location.pathname) {
        setCurrentRoute(route.path)
        return true
      }
      return false
    })
  }, [location])

  return (
    <>
      {menus.map((menu) => (
        <Card type="ul" className="list-none !p-0">
          {menu.items.map((item) => (
            <li>
              {item.isTitle ?
                <div className="py-4 my-2 px-4 bg-grey dark:bg-neutral-700 uppercase font-thin text-xs">
                  {item.icon && <span className="material-symbols-outlined">{item.icon}</span>} {item.label}
                </div> :
                <a
                  className={currentRoute && currentRoute === item.path ? menuActive : menuItem}
                  onClick={item.onClick}
                >
                  <>

                    {item.icon && <span className="material-symbols-outlined">{item.icon}</span>} {item.label}
                  </>
                </a>
              }
            </li>
          ))}
        </Card>
      ))}
    </>
  )
}
