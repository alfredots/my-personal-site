import { useState, useEffect } from 'react'

export function useAboutMeSection() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(null)
  }, [])

  return value
}
