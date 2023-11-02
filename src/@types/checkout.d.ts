type AddressType = {
  ZIP: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

type PaymentType = 'credit' | 'debit' | 'cash'

type SelectedCoffeesType = {
  [coffeeKey: string]: number
}

type CheckoutDataType = {
  completeAddress: AddressType
  paymentType: PaymentType
  selectedCoffees: SelectedCoffeesType
}
