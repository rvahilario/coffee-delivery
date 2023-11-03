import { ReactNode, createContext, useState } from 'react'

type OrderContextType = {
  selectedCoffees: SelectedCoffeesType
  handleAddCoffee: (coffeeKey: string, quantity: number) => void
  handleRemoveCoffee: (coffeeKey: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

type OrderProviderProps = {
  children: ReactNode
}

export const OrderContextProvider = ({ children }: OrderProviderProps) => {
  const [selectedCoffees, setSelectedCoffees] = useState<SelectedCoffeesType>(
    {},
  )

  function handleRemoveCoffee(coffeeKey: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [coffeeKey]: _, ...rest } = selectedCoffees
    setSelectedCoffees(rest)
  }

  function handleAddCoffee(coffeeKey: string, quantity: number) {
    setSelectedCoffees((prevState) => ({ ...prevState, [coffeeKey]: quantity }))
  }

  return (
    <OrderContext.Provider
      value={{ selectedCoffees, handleAddCoffee, handleRemoveCoffee }}
    >
      {children}
    </OrderContext.Provider>
  )
}
