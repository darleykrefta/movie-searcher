import { useEffect, useState } from 'react'

import useDebounce from 'helpers/hooks/useDebounce'

import { Icon } from 'components/Icon'
import { InputText } from 'components/InputText/InputText'

type InputTextSearchProps = {
  id?: string
  name: string
  placeholder: string
  resultSearch: (s: string) => void
}

export const InputTextSearch = ({ id, name, placeholder, resultSearch }: InputTextSearchProps) => {
  const [text, setText] = useState<string>('')

  const search = useDebounce<string>(text, 600)

  useEffect(() => {
    resultSearch(search)
  }, [search, resultSearch])

  return (
    <InputText
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={(event) => setText(event.target.value)}
      leftIcon={<Icon name="heart-default" width="16px" height="16px" />}
    />
  )
}
