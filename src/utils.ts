import numeral from 'numeral'

export function formatCurrencyValue(value: number): string {
  return numeral(value).format('0,0.00')
}
