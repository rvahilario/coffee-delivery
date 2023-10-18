type CoffeeType = {
  name: string
  description: string
  price: number
  tags: string[]
  imageSrc: string
}

type CoffeeObject = {
  [key: string]: CoffeeType
}
