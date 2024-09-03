import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// Cria um contexto para gerenciar o estado do modo escuro
interface DarkModeContextType {
  // Indica se o modo escuro está ativo
  isDarkMode: boolean
  // Função para alternar entre o modo claro e escuro
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => { },
})

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  // Estado para controlar se o modo escuro está ativo
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Obtém o tema armazenado no localStorage
    const storedTheme = localStorage.getItem('theme')
    // Se tiver tema armazenado, utiliza o valor
    if (storedTheme) {
      return storedTheme === 'dark'
    }

    // Caso contrário, verifica a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Efeitos colaterais:
  // 1. Monitora mudanças nas preferências de cores do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches)
    }
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  // 2. Salva a preferência do usuário no localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Função para alternar o modo escuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// Hook customizado para acessar o contexto de modo escuro
const useDarkMode = () => useContext(DarkModeContext)

export { useDarkMode, DarkModeProvider }