import numeral from 'numeral'
import { COFFEE_OBJECT } from './constants/coffees'

export function formatCurrencyValue(value: number): string {
  return numeral(value).format('0,0.00')
}

export function calculateTotal(selectedCoffees: SelectedCoffeesType): {
  totalItems: number
  deliveryTax: number
  total: number
} {
  const totalItems = Object.keys(selectedCoffees).reduce((total, coffeeKey) => {
    const quantity = selectedCoffees[coffeeKey]
    const coffeePrice = COFFEE_OBJECT[coffeeKey].price
    return total + coffeePrice * quantity
  }, 0)

  const deliveryTax = 5 // Fixed value or calculated based on distance
  const total = totalItems + deliveryTax

  return { totalItems, deliveryTax, total }
}
