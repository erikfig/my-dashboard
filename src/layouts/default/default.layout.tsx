import { useCallback, useState } from 'react'
import { Rounded } from '../../components/rounded'
import { useDarkMode } from '../../contexts/dark-mode'
import './style.css'
import { Menu, MenuItem } from './components/menu'
import { Typography } from '../../components/Typography'
import { Toggle } from '../../components/form/toggle'
import { Outlet, useNavigate } from 'react-router-dom'
import { RoutesConfig } from '@config/routes'
import { Img } from '../../components/img'

type DefaultLayoutProps = {
  title?: string
}

export const DefaultLayout = ({ title }: DefaultLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className='grid h-screen w-screen lg:grid-cols-wrapper bg-grey dark:bg-dark dark:text-light'>
        <section className={`bg-grey dark:bg-dark fixed z-10 left-0 w-screen lg:w-auto lg:relative grid grid-rows-nav h-screen overflow-y-auto transition-all ${!isMenuOpen && '-ml-[100%] lg:ml-0'}`}>
          <div className='m-6'>

            <div className='block lg:hidden absolute top-6 right-6 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="material-symbols-outlined">close</span>
            </div>

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
        <main className="relative z-0 overflow-x-hidden">

          <header className='flex gap-4 justify-between items-center h-12 mt-6 ml-6 mr-6 mb-2'>
            <Typography ellipsis type="h1" className='!text-2xl'>
              <div className='block lg:hidden cursor-pointer float-left mr-4' onClick={() => setIsMenuOpen(true)}>
                <span className="material-symbols-outlined">menu</span>
              </div>
              {title}
            </Typography>
            <Typography type="display" className='flex items-center gap-6'>

              <Toggle checked={isDarkMode} onClick={darkModeHandler}>
                <span className="material-symbols-outlined">{isDarkMode ? 'brightness_4' : 'brightness_7'}</span> <span className="hidden md:inline-flex">Dark Mode</span>
              </Toggle>

            </Typography>
          </header>

          <Outlet />
        </main>
      </div>
    </div>
  )
}
