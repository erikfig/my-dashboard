import { useCallback } from 'react'
import { useDarkMode } from '@contexts/dark-mode'
import { CardBackground, Img, Typography, Toggle, Rounded } from '@components'
import { Outlet } from 'react-router-dom'

export const LoginLayout = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const darkModeHandler = useCallback(() => {
    toggleDarkMode()
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="lg:grid lg:grid-cols-2 h-screen">

        <div className="hidden lg:flex justify-center items-center bg-gray-300 relative">
          <CardBackground src="/programmer.jpeg" className="bg-dark/80 rounded-full text-white flex flex-col gap-16 items-center justify-around">
            <div className="flex items-center gap-3">
              <Rounded><Img src="/logo.png" width={50} height={50} /></Rounded>
              {' '}
              <span>Erik <span className='text-primary'>Dashboard</span></span>
            </div>
          </CardBackground>
        </div>

        <Outlet />

      </div>

      <Typography type="display" className='absolute bottom-4 right-1 flex items-center gap-6 dark:text-white'>
        <Toggle checked={isDarkMode} onClick={darkModeHandler}>
          <span className="material-symbols-outlined">{isDarkMode ? 'brightness_4' : 'brightness_7'}</span> Dark Mode
        </Toggle>
      </Typography>
    </div>
  )
}
