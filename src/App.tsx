import { ToastContainer } from 'react-toastify'
import { Router } from './router'

export const App = () => (
  <>
    <Router />
    <ToastContainer position="bottom-right" theme="colored" />
  </>
)
