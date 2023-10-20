import styled from 'styled-components'

import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <NavLink to={'/'} className="checkout">
        <Logo src={logo} />
      </NavLink>
      <StyledNav>
        <div className="location">
          <MapPin size={'1.375rem'} weight="fill" />
          Rio de Janeiro, RJ
        </div>
        <NavLink to={'/checkout'} className="checkout">
          <ShoppingCart size={'1.375rem'} weight="fill" />
        </NavLink>
      </StyledNav>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const StyledNav = styled.nav`
  display: flex;
  height: 2.375rem;
  gap: 0.75rem;

  .location {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['purple-dark']};
    background: ${({ theme }) => theme['purple-light']};
  }

  .checkout {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['yellow-dark']};
    background: ${({ theme }) => theme['yellow-light']};
  }
`

const Logo = styled.img`
  height: 2.5rem;
`
