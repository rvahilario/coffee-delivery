import numeral from 'numeral'
import { COFFEE_OBJECT } from './constants/coffees'

export function formatCurrencyValue(value: number): string {
  return numeral(value).format('0,0.00')
}

export function calculateTotal(checkoutData: CheckoutData): {
  totalItems: number
  deliveryTax: number
  total: number
} {
  const totalItems = checkoutData.selectedCoffees.reduce(
    (total, coffee) =>
      total + COFFEE_OBJECT[coffee.coffeeKey].price * coffee.quantity,
    0,
  )

  const deliveryTax = 5 // Fixed value or calculated based on distance
  const total = totalItems + deliveryTax
  return { totalItems, deliveryTax, total }
}
