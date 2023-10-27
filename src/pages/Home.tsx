import styled, { useTheme } from 'styled-components'

import coffeeImage from '../assets/home-image.svg'
import { CircleIcon } from '../components/CircleIcon'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { COFFEE_OBJECT } from '../constants/coffees'
import { CoffeeCard } from '../components/CoffeeCard'

export function Home() {
  const theme = useTheme()

  return (
    <Container>
      <PresentationDiv>
        <div>
          <TitleDiv>
            <h1>Find the perfect coffee for any time of day</h1>
            <p>
              With Coffee Delivery, you can receive your favorite coffee
              wherever you are, at any time
            </p>
          </TitleDiv>

          <IconsDiv>
            <Column>
              <span>
                <CircleIcon
                  backgroundColor={theme['yellow-dark']}
                  icon={<ShoppingCart size={'1rem'} weight="fill" />}
                />
                Easy and secure purchase
              </span>
              <span>
                <CircleIcon
                  backgroundColor={theme.yellow}
                  icon={<Timer size={'1rem'} weight="fill" />}
                />
                Fast and tracked delivery
              </span>
            </Column>

            <Column>
              <span>
                <CircleIcon
                  backgroundColor={theme['base-text']}
                  icon={<Package size={'1rem'} weight="fill" />}
                />
                Packaging keeps the coffee intact
              </span>
              <span>
                <CircleIcon
                  backgroundColor={theme.purple}
                  icon={<Coffee size={'1rem'} weight="fill" />}
                />
                Fresh coffee delivered to you
              </span>
            </Column>
          </IconsDiv>
        </div>

        <div>
          <img
            src={coffeeImage}
            alt={
              'Image of a coffee cup on a yellow background. Around the cup, images of coffee beans, ground coffee, and roasted coffee powder.'
            }
          />
        </div>
      </PresentationDiv>

      <ShopDiv>
        <h2>Our coffees</h2>
        <ShopGrid>
          {Object.entries(COFFEE_OBJECT).map(([key, coffee]) => (
            <CoffeeCard key={key} id={key} coffee={coffee} />
          ))}
        </ShopGrid>
      </ShopDiv>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PresentationDiv = styled.div`
  display: flex;
  padding: 5.75rem 0;
  gap: 3.5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  > p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
  }
`

const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  > span {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${({ theme }) => theme['base-text']};
    font-weight: 400;
  }
`

const ShopDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }
`

const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
`
