interface Address {
  ZIP: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

type PaymentType = 'credit' | 'debit' | 'cash'

interface SelectedCoffee {
  coffeeKey: string
  quantity: number
}

interface CheckoutData {
  deliveryAddress: Address
  paymentType: PaymentType
  selectedCoffees: SelectedCoffee[]
}
