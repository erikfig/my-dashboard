import { MouseEventHandler } from 'react'
import { Card } from '../card'

type MenuItem = {
  label: string,
  icon?: string,
  action?: MouseEventHandler<HTMLAnchorElement>,
  isTitle?: boolean,
}

type Menu = {
  items: MenuItem[]
}

type MenuProps = {
  menus: Menu[],
}

export const Menu = ({ menus }: MenuProps) => {
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
                  className='py-2 my-2 px-4 block hover:bg-grey hover:dark:bg-neutral-700 hover:no-underline transition-all duration-500'
                  onClick={item.action}
                >
                  {item.icon && <span className="material-symbols-outlined">{item.icon}</span>} {item.label}
                </a>
              }
            </li>
          ))}
        </Card>
      ))}
    </>
  )
}
