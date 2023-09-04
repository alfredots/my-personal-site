import { useState, useEffect } from 'react'

export function useSectionHero() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [])

  return value
}
