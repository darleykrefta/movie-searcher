import { useEffect, useState } from 'react'

export default function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}
