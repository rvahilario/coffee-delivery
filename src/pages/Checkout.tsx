import { Fragment, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { CustomInput } from '../components/CustomInput'
import { PaymentOptions } from '../components/PaymentOptions'
import { Button } from '../components/Button'
import { CoffeeCard } from '../components/CoffeeCard'
import { COFFEE_OBJECT } from '../constants/coffees'
import { calculateTotal, formatCurrencyValue } from '../utils'

const mockCheckoutData: CheckoutDataType = {
  completeAddress: {
    ZIP: '12345',
    street: '123 Main St',
    number: '1A',
    complement: 'Apt 101',
    neighborhood: 'Coffeeville',
    city: 'Caffeine City',
    state: 'CA',
  },
  paymentType: 'credit',
  selectedCoffees: {
    traditionalEspresso: 2,
    icedEspresso: 1,
    hotChocolate: 3,
  },
}

const DEFAULT_ADDRESS: AddressType = {
  ZIP: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
}

const DEFAULT_PAYMENT_TYPE: PaymentType = 'credit'

const DEFAULT_SELECTED_COFFEES: SelectedCoffeesType =
  mockCheckoutData.selectedCoffees

export function Checkout() {
  const theme = useTheme()
  const [completeAddress, setCompleteAddress] = useState(DEFAULT_ADDRESS)
  const [paymentType, setPaymentType] = useState(DEFAULT_PAYMENT_TYPE)
  const [selectedCoffees, setSelectedCoffees] = useState(
    DEFAULT_SELECTED_COFFEES,
  )
  const { totalItems, deliveryTax, total } = calculateTotal(selectedCoffees)

  function handleAddressDataChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    setCompleteAddress((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  function handlePaymentTypeChange(paymentType: PaymentType) {
    setPaymentType(paymentType)
  }

  function handleCoffeeQuantityChange(coffeeKey: string, quantity: number) {
    setSelectedCoffees((prevState) => ({
      ...prevState,
      [coffeeKey]: quantity,
    }))
  }

  function onConfirmOrder() {
    const checkoutData: CheckoutDataType = {
      completeAddress,
      paymentType,
      selectedCoffees,
    }
    console.log('Sending order data: ', checkoutData)

    // TODO: send checkoutData to backend
    // TODO: redirect to order confirmation page
  }

  return (
    <Container>
      <SubContainer>
        <h2>Complete your order</h2>
        <FormDiv>
          <FormTitle>
            <MapPinLine size={'1.375rem'} color={theme['yellow-dark']} />
            <div>
              <h3>Delivery Address</h3>
              <p>Provide the address where you want to receive your order</p>
            </div>
          </FormTitle>
          <ColumnDiv>
            <RowDiv>
              <CustomInput
                id="ZIP"
                placeholder="ZIP Code"
                width={'12.5rem'}
                onChange={handleAddressDataChange}
              />
            </RowDiv>
            <RowDiv>
              <CustomInput
                id="street"
                placeholder="Street"
                onChange={handleAddressDataChange}
              />
            </RowDiv>
            <RowDiv>
              <CustomInput
                id="number"
                placeholder="Number"
                width={'12.5rem'}
                onChange={handleAddressDataChange}
              />
              <CustomInput
                id="complement"
                placeholder="Complement"
                isOptional
                onChange={handleAddressDataChange}
              />
            </RowDiv>
            <RowDiv>
              <CustomInput
                id="neighborhood"
                placeholder="Neighborhood"
                width={'12.5rem'}
                onChange={handleAddressDataChange}
              />
              <CustomInput
                id="city"
                placeholder="City"
                onChange={handleAddressDataChange}
              />
              <CustomInput
                id="state"
                placeholder="State"
                width={'3.75rem'}
                onChange={handleAddressDataChange}
              />
            </RowDiv>
          </ColumnDiv>
        </FormDiv>

        <FormDiv>
          <FormTitle>
            <CurrencyDollar size={'1.375rem'} color={theme.purple} />
            <div>
              <h3>Payment</h3>
              <p>
                Payment is made upon delivery. Choose the payment method you
                prefer
              </p>
            </div>
          </FormTitle>
          <PaymentOptions onChange={handlePaymentTypeChange} />
        </FormDiv>
      </SubContainer>

      <SubContainer>
        <h2>Selected Coffees</h2>
        <FormDiv className="total-form-div">
          {Object.entries(selectedCoffees).map(([coffeeKey, quantity]) => {
            const coffee = COFFEE_OBJECT[coffeeKey]

            return (
              <Fragment key={coffeeKey}>
                <CoffeeCard
                  coffeeKey={coffeeKey}
                  coffee={coffee}
                  quantity={quantity}
                  onChange={handleCoffeeQuantityChange}
                  variant="horizontal"
                />
                <hr />
              </Fragment>
            )
          })}
          <TotalDiv>
            <p>
              Total items<span>${formatCurrencyValue(totalItems)}</span>
            </p>
            <p>
              Delivery tax<span>${formatCurrencyValue(deliveryTax)}</span>
            </p>
            <p className="-total">
              Total
              <span>${formatCurrencyValue(total)}</span>
            </p>
          </TotalDiv>
          <Button variant="primary" onClick={onConfirmOrder}>
            Confirm order
          </Button>
        </FormDiv>
      </SubContainer>
    </Container>
  )
}

const Container = styled.form`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
  }
`

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 0.375rem;
  gap: 1.5rem;

  > button {
    width: 100%;
  }
  > hr {
    width: 100%;
    color: ${({ theme }) => theme['base-button']};
  }
  .chakra-stack {
    width: 100%;
  }
  &.total-form-div {
    border-radius: 0.375rem 2.75rem;
  }
`

const RowDiv = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const FormTitle = styled(RowDiv)`
  margin-bottom: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    > h3 {
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: 400;
    }
    > p {
      color: ${({ theme }) => theme['base-text']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  > p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    > span {
      font-size: 1rem;
    }
    &.-total,
    &.-total > span {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`
