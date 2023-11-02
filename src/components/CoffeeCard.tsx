import { useState } from 'react'
import styled from 'styled-components'
import { formatCurrencyValue } from '../utils'
import { InputNumberSpinner } from './InputNumberSpinner'
import { Button } from './Button'

interface CoffeeCardProps {
  coffeeKey: string
  coffee: CoffeeType
  variant?: 'vertical' | 'horizontal'
  quantity: number
  onChange: (coffeeKey: string, quantity: number) => void
}

export function CoffeeCard({
  coffeeKey,
  coffee,
  variant = 'vertical',
  onChange,
  quantity,
}: CoffeeCardProps) {
  const { name, description, price, tags, imageSrc } = coffee
  const isVertical = variant === 'vertical'

  function handleInputChange(value: number) {
    onChange(coffeeKey, value)
  }

  return (
    <CardContainer className={isVertical ? 'vertical' : ''}>
      <img src={imageSrc} alt="" />

      {isVertical ? (
        <>
          <CardContent>
            <Tags $variant={variant}>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>

            <CoffeeName className={'vertical'}>{name}</CoffeeName>
            <p>{description}</p>
          </CardContent>

          <CardFooter>
            <Price className={'vertical'} $variant={variant}>
              <p>
                $ <span>{formatCurrencyValue(price)}</span>
              </p>
            </Price>
            <Actions $variant={variant}>
              <InputNumberSpinner
                id={coffeeKey}
                steps={1}
                onChange={handleInputChange}
                quantity={quantity}
              />
              <Button
                variant={'shopping-cart'}
                onClick={() => console.log('click')}
              />
            </Actions>
          </CardFooter>
        </>
      ) : (
        <>
          <CardContent>
            <CoffeeName>{name}</CoffeeName>
            <Actions $variant={variant}>
              <InputNumberSpinner
                id={coffeeKey}
                steps={1}
                onChange={handleInputChange}
                quantity={quantity}
              />
              <Button variant={'remove'} onClick={() => console.log('click')} />
            </Actions>
          </CardContent>
          <Price $variant={variant}>
            <p>
              $ <span>{formatCurrencyValue(price)}</span>
            </p>
          </Price>
        </>
      )}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme['base-card']};
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  width: 100%;
  height: 5rem;

  > img {
    height: 4rem;
    width: 4rem;
    margin-right: 1.25rem;
  }

  &.vertical {
    border-radius: 0.375rem 2.25rem;
    flex-direction: column;
    align-items: center;
    padding: 0 1.25rem 1.25rem;
    width: 16rem;
    height: 19.375rem;
    > img {
      height: 7.5rem;
      width: 7.5rem;
      margin-bottom: 0.75rem;
      margin-top: -1.25rem;
      margin-right: 0;
    }
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme['base-label']};
    text-align: center;
    font-size: 0.875rem;
  }
`

const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const Tags = styled.div<{ $variant: string }>`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: ${(props) => (props.$variant === 'vertical' ? '16px' : '0')};
`

const Tag = styled.span`
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

const CoffeeName = styled.h3`
  color: ${({ theme }) => theme['base-subtitle']};
  text-align: start;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  &.vertical {
    text-align: center;
    font-size: 1.25rem;
    font-family: 'Baloo 2';
  }
`

const Price = styled.div<{ $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: ${({ theme }) => theme['base-text']};

  > p {
    font-size: ${(props) =>
      props.$variant === 'vertical' ? '0.875rem' : '1rem'};
    font-weight: ${(props) => (props.$variant === 'vertical' ? 400 : 700)};
    padding: 0 0.25rem;
  }

  &.vertical {
    justify-content: space-between;
    width: 100%;

    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

const Actions = styled.div<{ $variant: string }>`
  display: flex;
  gap: 0.5rem;
  max-height: ${(props) => (props.$variant === 'vertical' ? 'unset' : '2rem')};

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
`
