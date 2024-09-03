import { useCallback } from 'react'
import { Rounded } from '../../components/rounded'
import { useDarkMode } from '../../contexts/dark-mode'
import './style.css'
import { Menu, MenuItem } from '../../components/menu'
import { Typography } from '../../components/Typography'
import { Toggle } from '../../components/form/toggle'
import { Outlet, useNavigate } from 'react-router-dom'
import { RoutesConfig } from '@config/routes'
import { Img } from '../../components/img'

type DefaultLayoutProps = {
  title?: string
}

export const DefaultLayout = ({ title }: DefaultLayoutProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const menuItems = RoutesConfig
    .filter((route) => route.props?.menuIcon && route.props?.menuLabel)
    .map((route) => {
      const menuItem: MenuItem = {
        label: route.props?.menuLabel as string,
        icon: route.props?.menuIcon,
      }

      if (route.path) {
        menuItem.path = route.path
        menuItem.onClick = () => navigate(route.path as string)
      }

      if (!route.path) {
        menuItem.isTitle = true
      }
      return menuItem
    })

  const navigate = useNavigate()

  const darkModeHandler = useCallback(() => {
    toggleDarkMode()
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className='grid h-screen w-screen grid-cols-wrapper bg-grey dark:bg-dark dark:text-light'>
        <section className='grid grid-rows-nav h-screen'>
          <div className='m-6'>

            <a href="" className="flex items-center gap-3">
              <Rounded><Img src="/logo.png" width={50} height={50} /></Rounded>
              {' '}
              <span>Erik <span className='text-primary'>Dashboard</span></span>
            </a>
          </div>
          <nav className="flex flex-col justify-between">
            <Menu menus={[
              {
                items: menuItems,
              },
              {
                items: [
                  {
                    label: <span className='flex items-center gap-6 justify-center'>
                      Erik Figueiredo
                      {' '}
                      <Rounded>
                        <img src="https://avatars.githubusercontent.com/u/4331013?v=4" width={40} height={40} alt="" />
                      </Rounded>
                    </span>,
                    isTitle: true,
                  },
                  {
                    label: 'Meu perfil',
                    icon: 'manage_accounts'
                  },
                  {
                    label: 'Sair',
                    icon: 'logout'
                  },
                ],
              }
            ]} />
          </nav>
        </section>
        <main className="overflow-x-hidden">

          <header className='flex justify-between items-center h-12 mt-6 ml-6 mr-6 mb-2'>
            <Typography type="h1" className='!text-2xl'>
              {title}
            </Typography>
            <Typography type="display" className='flex items-center gap-6'>

              <Toggle checked={isDarkMode} onClick={darkModeHandler}>
                <span className="material-symbols-outlined">{isDarkMode ? 'brightness_4' : 'brightness_7'}</span> Dark Mode
              </Toggle>

            </Typography>
          </header>

          <Outlet />
        </main>
      </div>
    </div>
  )
}
