import { ReactNode } from 'react'
import styled from 'styled-components'

type CircleIconProps = {
  icon: ReactNode
  backgroundColor: string
}

export function CircleIcon({ icon, backgroundColor }: CircleIconProps) {
  return <Container $backgroundColor={backgroundColor}>{icon}</Container>
}

const Container = styled.div<{ $backgroundColor: string }>`
  background: ${(props) => props.$backgroundColor};
  color: ${({ theme }) => theme.background};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
`
