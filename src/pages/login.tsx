import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Card, FormContainer, InputController, Img, Rounded, Typography, toast } from '@components'
import { useState } from 'react'

type Form = {
  email: string
  password: string
  remember?: boolean
}

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  remember: yup.boolean().optional(),
})

export const LoginPage = () => {
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(Schema),
  })

  const submit: SubmitHandler<Form> = (data) => {
    toast.success(`Sign in with ${data.email}!`)
    toast.success(`Welcome!`)

    setDisabled(true)

    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 dark:text-white dark:bg-gray-800 p-4 h-screen">
      <FormContainer style={{ maxWidth: 400, width: '100%' }} onSubmit={handleSubmit(submit)}>
        <Card className='flex gap-6 flex-col'>
          <Typography type="h2" className="flex items-center gap-3">
            <Rounded><Img src="/logo.png" width={50} height={50} /></Rounded>
            Sign in to your account
          </Typography>

          <InputController
            control={control}
            name="email"
            label="Email"
            type="email"
            errors={errors}
            placeholder='E-mail'
          />

          <InputController
            control={control}
            name="password"
            label="Password"
            type="password"
            errors={errors}
            placeholder='Password'
          />

          <InputController
            control={control}
            name="remember"
            type='checkbox'
            options={[
              { label: 'Remember-me', value: true },
            ]}
            errors={errors}
          />

          <Button isLoading={disabled} disabled={disabled}>Login</Button>
        </Card>
      </FormContainer>
    </div>
  )
}