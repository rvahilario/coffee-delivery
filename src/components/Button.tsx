import { ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'
import { ShoppingCart, Trash } from '@phosphor-icons/react'

interface ButtonProps {
  variant?: 'primary' | 'remove' | 'shopping-cart'
  children?: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  switch (variant) {
    case 'remove':
      return (
        <RemoveButton onClick={onClick}>
          <Trash size={'1rem'} />
          <span>Remove</span>
        </RemoveButton>
      )

    case 'shopping-cart':
      return (
        <ShoppingCartButton onClick={onClick}>
          <ShoppingCart size={'1.375rem'} weight="fill" />
        </ShoppingCartButton>
      )

    default:
      return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
  }
}

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  line-height: 1.6;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
  border: none;
  color: ${({ theme }) => theme.white};
`

const PrimaryButton = styled(BaseButton)`
  min-width: 8.25rem;
  padding: 0.75rem 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.yellow};

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`

const RemoveButton = styled(BaseButton)`
  font-size: 0.75rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme.purple};
  > span {
    color: ${({ theme }) => theme['base-text']};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
    color: ${({ theme }) => theme['purple-dark']};
    > span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

const ShoppingCartButton = styled(BaseButton)`
  background: ${({ theme }) => theme['purple-dark']};

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
