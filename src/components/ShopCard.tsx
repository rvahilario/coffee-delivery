import styled from 'styled-components'

interface ShopCardProps {
  coffee: CoffeeType
}

export function ShopCard({ coffee }: ShopCardProps) {
  const { name, description, price, tags, imageSrc } = coffee

  return (
    <Container>
      <img src={imageSrc} alt="" />
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <p>{price}</p>
        <button>chart</button>
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

  > img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
