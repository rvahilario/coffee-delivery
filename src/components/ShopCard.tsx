import { useState } from 'react'
import styled from 'styled-components'
import { formatCurrencyValue } from '../utils'
import { InputNumberSpinner } from './InputNumberSpinner'
import { Button } from './Button'

interface ShopCardProps {
  id: string
  coffee: CoffeeType
}

export function ShopCard({ id, coffee }: ShopCardProps) {
  const { name, description, price, tags, imageSrc } = coffee
  const [quantity, setQuantity] = useState(0)

  const handleInputChange = (value: number) => {
    setQuantity(value)
    console.log('quantity', quantity)
  }

  return (
    <Container>
      <img src={imageSrc} alt="" />

      <div>
        <InfoDiv>
          <TagDiv>
            {tags.map((tag) => (
              <TagSpan key={tag}>{tag}</TagSpan>
            ))}
          </TagDiv>
          <h3>{name}</h3>
          <p>{description}</p>
        </InfoDiv>
        <BuyDiv>
          <p>
            $ <span>{formatCurrencyValue(price)}</span>
          </p>

          <div>
            <InputNumberSpinner
              id={id}
              steps={1}
              onChange={handleInputChange}
            />
            <Button
              variant={'shopping-cart'}
              onClick={() => console.log('click')}
            />
          </div>
        </BuyDiv>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme['base-card']};
  height: 19.375rem;
  width: 16rem;

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 13.125rem;
  }

  > img {
    height: 7.5rem;
    width: 7.5rem;
    margin-bottom: 0.75rem;
    margin-top: -1.25rem;
  }
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  > h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    text-align: center;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  > p {
    color: ${({ theme }) => theme['base-label']};
    text-align: center;
    font-size: 0.875rem;
  }
`

const BuyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0 0.25rem;

    > span {
      color: ${({ theme }) => theme['base-text']};
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
    > input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4.5rem;
      height: 2.375rem;
      padding: 8px;
      gap: 4px;

      border-radius: 6px;
      border: none;
      background: ${({ theme }) => theme['base-button']};
    }
  }
`

const TagDiv = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 16px;
`

const TagSpan = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
`
