import { FormEvent, useCallback } from 'react'
import { useDarkMode } from '../../contexts/dark-mode'
import { Typography } from '../../components/Typography'
import { Toggle } from '../../components/form/toggle'
import { Rounded } from '../../components/rounded'
import { Img } from '../../components/img'
import { Card, CardBackground } from '../../components/card'
import { FormContainer } from '../../components/form/form-container'
import { Input } from '../../components/form/input'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'

export const LoginLayout = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const navigate = useNavigate()

  const darkModeHandler = useCallback(() => {
    toggleDarkMode()
  }, [isDarkMode])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/')
  }

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

        <div className="flex justify-center items-center bg-gray-200 dark:text-white dark:bg-gray-800 p-4 h-screen">
          <FormContainer style={{ maxWidth: 400, width: '100%' }} onSubmit={submit}>
            <Card className='flex gap-6 flex-col'>
              <Typography type="h2" className="flex items-center gap-3">
                <Rounded><Img src="/logo.png" width={50} height={50} /></Rounded>
                Sign in to your account
              </Typography>

              <Input
                name="email"
                label="Email"
                type="email"
                placeholder='Field with HTML props support'
              />

              <Input
                name="password"
                label="Field text"
                type="password"
                placeholder='Field with HTML props support'
              />

              <Input
                name="input-text-checkbox"
                type='checkbox'
                options={[
                  { label: 'Remember-me', value: 'remember' },
                ]}
              />

              <Button>Login</Button>
            </Card>
          </FormContainer>
        </div>

      </div>

      <Typography type="display" className='absolute bottom-4 right-1 flex items-center gap-6 dark:text-white'>
        <Toggle checked={isDarkMode} onClick={darkModeHandler}>
          <span className="material-symbols-outlined">{isDarkMode ? 'brightness_4' : 'brightness_7'}</span> Dark Mode
        </Toggle>
      </Typography>
    </div>
  )
}
