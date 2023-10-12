import { useState, useEffect } from 'react'

export function useHeader() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [])

  return value
}
