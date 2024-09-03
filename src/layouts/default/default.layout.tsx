import { useCallback } from 'react'
import { Rounded } from '../../components/rounded'
import { useDarkMode } from '../../contexts/dark-mode'
import './style.css'
import { Menu } from '../../components/menu'
import { Typography } from '../../components/Typography'
import { Toggle } from '../../components/form/toggle'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const darkModeHandler = useCallback(() => {
    toggleDarkMode()
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className='grid h-screen w-screen grid-cols-wrapper bg-grey dark:bg-dark dark:text-light'>
        <section className='grid grid-rows-nav h-screen'>
          <div className='m-6'>

            <a href="" className="flex items-center gap-3">
              <Rounded><img src="/logo.png" width={50} height={50} /></Rounded>
              {' '}
              <span>Erik <span className='text-primary'>Dashboard</span></span>
            </a>
          </div>
          <nav className="flex flex-col justify-between">
            {/* TODO: Pegar via config */}
            <Menu menus={[
              {
                items: [
                  {
                    label: 'Item 1',
                    icon: 'home'
                  },
                  {
                    label: 'Item 2',
                    icon: 'check_circle'
                  },
                  {
                    label: 'Item 3',
                    icon: 'key'
                  },
                  {
                    label: 'Item 4',
                    icon: 'keep_public'
                  },
                  {
                    label: 'Titulo 1',
                    icon: 'thumb_up',
                    isTitle: true,
                  },
                  {
                    label: 'Item 1',
                    icon: 'switch_access'
                  },
                  {
                    label: 'Item 2',
                    icon: 'clock_loader_80'
                  },
                  {
                    label: 'Item 3',
                    icon: 'expand_circle_right'
                  },
                ],
              },
              {
                items: [
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
            {/* TODO: Pegar via config */}
            <Typography type="h1" className='!text-2xl'>
              <span className="material-symbols-outlined">home</span> Titulo h1
            </Typography>
            <Typography type="display" className='flex items-center gap-6'>

              <Toggle checked={isDarkMode} onClick={darkModeHandler}>
                <span className="material-symbols-outlined">{isDarkMode ? 'brightness_4' : 'brightness_7'}</span> Dark Mode
              </Toggle>

              <a href="" className='flex items-center gap-6'>
                Erik Figueiredo
                {' '}
                <Rounded>
                  <img src="https://avatars.githubusercontent.com/u/4331013?v=4" width={40} height={40} alt="" />
                </Rounded>
              </a>
            </Typography>
          </header>

          {children}
        </main>
      </div>
    </div>
  )
}
