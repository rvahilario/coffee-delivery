import styled, { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { CustomInput } from '../components/CustomInput'

export function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <SubContainer>
        <h2>Complete seu pedido</h2>
        <FormDiv>
          <FormTitle>
            <MapPinLine size={'1.375rem'} color={theme['yellow-dark']} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormTitle>
          <ColumnDiv>
            <RowDiv>
              <CustomInput placeholder="CEP" width={'12.5rem'} />
            </RowDiv>
            <RowDiv>
              <CustomInput placeholder="Rua" />
            </RowDiv>
            <RowDiv>
              <CustomInput placeholder="Número" width={'12.5rem'} />
              <CustomInput placeholder="Complemento" isOptional />
            </RowDiv>
            <RowDiv>
              <CustomInput placeholder="Bairro" width={'12.5rem'} />
              <CustomInput placeholder="Cidade" />
              <CustomInput placeholder="UF" width={'3.75rem'} />
            </RowDiv>
          </ColumnDiv>
        </FormDiv>

        <FormDiv>
          <FormTitle>
            <CurrencyDollar size={'1.375rem'} color={theme.purple} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormTitle>
        </FormDiv>
      </SubContainer>
      <SubContainer>
        <h2>Cafés selecionados</h2>
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
  margin-bottom: 2rem;

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
