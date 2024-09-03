import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { DarkModeProvider } from './contexts/dark-mode.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
