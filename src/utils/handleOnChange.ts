import { useCallback } from 'react'

type FormDataType<T> = {
  [K in keyof T]: string | string[]
}

export const useOnChange = <T>(formData: FormDataType<T>, setFormData: (data: FormDataType<T>) => void) => {
  const handleOnChange = useCallback((field: keyof T, e: React.ChangeEvent<HTMLInputElement>) => {
    const localFieldData = { ...formData }
    localFieldData[field] = e.target.value
    setFormData(localFieldData)
  }, [formData])

  const handleOnChangeMultiple = useCallback((field: keyof T, e: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = formData[field]

    // Se o valor novo for um array
    if (Array.isArray(e.target.value)) {

      // Se o valor atual for um array e contem o valor atual ou está vazio
      if (
        Array.isArray(currentValue)
        && currentValue.filter((current: any) => (e.target.value).includes(current)).length > 0
        || e.target.value.length === 0
      ) {
        // Seto o valor novo como atual, removendo valores não informados
        currentValue = e.target.value
      } else {
        // Se não, eu adiciono o valor novo, mesclando os arrays
        // O new Set remove os valores repetidos
        currentValue = [...new Set([...currentValue, ...e.target.value])]
      }

      // Se o valor novo não for um array
    } else {

      // Se o valor atual for um array e contem o valor antigo
      if (Array.isArray(currentValue) && currentValue.includes(e.target.value)) {
        // Removemos os valores que não são o novo
        currentValue = currentValue.filter((value: unknown) => value !== e.target.value)
      } else if (Array.isArray(currentValue)) {
        // Se valor antigo for um array, mas NÃO contem o valor novo, adicionamos
        currentValue = [...currentValue, e.target.value]
      } else {
        // Se nenhum valor for array, trocamos o antigo par ao novo
        currentValue = e.target.value
      }
    }

    // Atualizamos o state
    const localFieldData = { ...formData }
    localFieldData[field] = currentValue
    setFormData(localFieldData)
  }, [formData])

  return { handleOnChange, handleOnChangeMultiple }
}
