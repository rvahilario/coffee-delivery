import { ChangeEvent, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Minus, Plus } from '@phosphor-icons/react'
import { OrderContext } from '../contexts/OrderContext'

function useInterval(callback: () => void, delay: number | null) {
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(callback, delay)
      return () => clearInterval(id)
    }
  }, [callback, delay])
}

type InputNumberProps = {
  coffeeKey: string
  steps: number
  onChange: (value: number) => void
  min?: number
}

export function InputNumberSpinner({
  coffeeKey,
  steps,
  onChange,
  min = 0,
}: InputNumberProps) {
  const { selectedCoffees } = useContext(OrderContext)
  const [value, setValue] = useState(selectedCoffees[coffeeKey] || 0)
  const [mouseDownDirection, setMouseDownDirection] = useState<
    'up' | 'down' | undefined
  >(undefined)

  function max(num: number) {
    return num < 0 ? 4 : 3
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target

    setValue((curr) => {
      if (!value) {
        return 0
      }
      const numeric = parseInt(value, 10)
      const maxLength = max(numeric)

      return value.length <= maxLength ? numeric : curr
    })
  }

  function handleButtonChange(direction?: 'up' | 'down') {
    setValue((curr) => {
      let next: number

      switch (direction) {
        case 'up':
          next = curr + (steps || 1)
          break
        case 'down':
          next = curr - (steps || 1)
          break
        default:
          next = curr
          break
      }

      return `${next}`.length <= max(curr) ? Math.max(next, min) : curr
    })
  }

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
    direction: 'up' | 'down',
  ) {
    event.preventDefault()
    handleButtonChange(direction)
  }

  useEffect(() => {
    if (onChange && (value >= 1 || selectedCoffees[coffeeKey])) {
      onChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useInterval(
    () => handleButtonChange(mouseDownDirection),
    mouseDownDirection ? 200 : null,
  )

  return (
    <Container>
      <button
        onClick={(event) => {
          handleClick(event, 'down')
        }}
        onMouseDown={() => setMouseDownDirection('down')}
        onMouseOut={() => setMouseDownDirection(undefined)}
        onMouseUp={() => setMouseDownDirection(undefined)}
      >
        <Minus size={'0.875rem'} weight="bold" />
      </button>
      <input
        id={coffeeKey}
        type="number"
        step={steps}
        value={value}
        onChange={handleChange}
        min={0}
      />
      <button
        onClick={(event) => {
          handleClick(event, 'up')
        }}
        onMouseDown={() => setMouseDownDirection('up')}
        onMouseUp={() => setMouseDownDirection(undefined)}
        onMouseOut={() => setMouseDownDirection(undefined)}
      >
        <Plus size={'0.875rem'} weight="bold" />
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme['base-button']};

  > button:focus,
  > input:focus {
    border: none;
    box-shadow: none;
    outline: none !important;
  }

  > input {
    background: transparent;
    border: 0;
    width: 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme['base-title']};

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.875rem;
    height: 0.875rem;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
    border: none;
    background: transparent;

    &:hover,
    &:active {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
