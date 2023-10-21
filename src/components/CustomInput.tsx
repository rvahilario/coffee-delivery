import { InputHTMLAttributes } from 'react'
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import styled, { useTheme } from 'styled-components'

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export function CustomInput({
  isOptional = false,
  ...props
}: CustomInputProps) {
  const theme = useTheme()

  return (
    <InputGroup>
      <StyledInput as="input" {...props} size={'md'} />

      {isOptional && (
        <InputRightElement
          pointerEvents="none"
          color={theme['base-label']}
          fontSize="1rem"
          mr={8}
        >
          Optional
        </InputRightElement>
      )}
    </InputGroup>
  )
}

const StyledInput = styled(Input)`
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  border: 1px solid transparent;
  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.yellow};
  }
  outline: none;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.25rem;
  // bg={theme['base-input']}
  // color={theme['base-text']}
  // _placeholder={{
  //   color: theme['base-label'],
  // }}
  // focusBorderColor={theme.yellow}
`
