import { useEffect, useState } from 'react'

import useDebounce from 'helpers/hooks/useDebounce'

import { Icon } from 'components/Icon'
import { InputText } from 'components/InputText/InputText'

type InputTextSearchProps = {
  id?: string
  name: string
  placeholder: string
  isLoading?: boolean
  resultSearch: (s: string) => void
}

export const InputTextSearch = ({ id, name, placeholder, isLoading, resultSearch }: InputTextSearchProps) => {
  const [text, setText] = useState<string>('star wars')

  const search = useDebounce<string>(text, 600)

  useEffect(() => {
    resultSearch(search)
  }, [search, resultSearch])

  return (
    <InputText
      id={id}
      name={name}
      defaultValue={text}
      placeholder={placeholder}
      onChange={(event) => setText(event.target.value)}
      disabled={isLoading}
      leftIcon={<Icon name="magnifier-default" width="24px" height="24px" viewBox="0 0 16 16" />}
    />
  )
}
