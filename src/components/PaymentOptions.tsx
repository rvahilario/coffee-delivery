import {
  Box,
  HStack,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'

const PAYMENT_OPTIONS = [
  { value: 'credit', label: 'credit card' },
  { value: 'debit', label: 'debit card' },
  { value: 'cash', label: 'cash' },
]

interface RadioCardProps {
  children: React.ReactNode
  radio: UseRadioProps | undefined
}

function RadioCard({ children, radio }: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(radio)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <StyledBox as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </StyledBox>
  )
}

type PaymentOptionsProps = {
  onChange: (value: PaymentType) => void
}

export function PaymentOptions({ onChange }: PaymentOptionsProps) {
  const theme = useTheme()
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'paymentOption',
    defaultValue: PAYMENT_OPTIONS[0].value,
    onChange: (value: PaymentType) => onChange(value),
  })

  const group = getRootProps()
  const DEFAULT_SIZE = '1rem'

  return (
    <HStack {...group}>
      {PAYMENT_OPTIONS.map(({ value, label }) => {
        const radio = getRadioProps({ value })
        let iconComponent: JSX.Element

        switch (value) {
          case 'credit': {
            iconComponent = (
              <CreditCard size={DEFAULT_SIZE} color={theme.purple} />
            )
            break
          }
          case 'debit': {
            iconComponent = <Bank size={DEFAULT_SIZE} color={theme.purple} />
            break
          }
          default: {
            iconComponent = <Money size={DEFAULT_SIZE} color={theme.purple} />
            break
          }
        }

        return (
          <RadioCard key={value} radio={radio}>
            {iconComponent}
            {label}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

const StyledBox = styled(Box)`
  width: 100%;

  div {
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 0.75rem;
    flex: 1 0 0;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme['base-button']};

    &[data-hover] {
      background: ${({ theme }) => theme['base-hover']};
      border: 1px solid ${({ theme }) => theme['base-hover']};
    }

    &[data-checked] {
      color: ${({ theme }) => theme['base-text']};
      border: 1px solid ${({ theme }) => theme.purple};
      background: ${({ theme }) => theme['purple-light']};
    }
  }
`
