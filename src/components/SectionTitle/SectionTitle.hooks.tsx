import { useState, useEffect } from 'react'

export function useSectionTitle() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [])

  return value
}
