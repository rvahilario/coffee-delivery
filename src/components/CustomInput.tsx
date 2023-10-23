import { InputHTMLAttributes } from 'react'
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import styled, { useTheme } from 'styled-components'

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
  width?: string
}

export function CustomInput({
  isOptional = false,
  width,
  ...props
}: CustomInputProps) {
  const customWidth = width || '100%'

  return (
    <InputGroup
      css={`
        width: ${customWidth};
      `}
    >
      <StyledInput
        isOptional={isOptional}
        width={customWidth}
        as="input"
        {...props}
        size={'md'}
      />

      {isOptional && (
        <StyledInputRightElement pointerEvents="none">
          Optional
        </StyledInputRightElement>
      )}
    </InputGroup>
  )
}

const StyledInput = styled(Input)<{ isOptional?: boolean; width?: string }>`
  height: 2.5rem;
  width: ${({ width }) => width};
  padding: 0.75rem;
  padding-right: calc(
    ${({ isOptional }) => (isOptional ? '3.625rem + 0.75rem' : '0.75rem')}
  );
  border: 1px solid transparent;
  outline: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-text']};
  background: ${({ theme }) => theme['base-input']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.yellow};
  }
`

const StyledInputRightElement = styled(InputRightElement)`
  height: 100%;
  width: 3.625rem;
  font-style: italic;
  font-size: 0.75rem;
  padding: 0.75rem;
  padding-left: 0;
  color: ${({ theme }) => theme['base-label']};
`
