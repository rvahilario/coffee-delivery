import americanEspresso from '../assets/coffees/american-espresso.svg'
import arabianCoffee from '../assets/arabian-coffee.svg'
import cafeAuLait from '../assets/cafe-au-lait.svg'
import icedEspresso from '../assets/iced-espresso.svg'
import cappuccino from '../assets/cappuccino.svg'
import hotChocolate from '../assets/hot-chocolate.svg'
import cubanCoffee from '../assets/cuban-coffee.svg'
import creamyEspresso from '../assets/creamy-espresso.svg'
import traditionalEspresso from '../assets/traditional-espresso.svg'
import hawaiianCoffee from '../assets/hawaiian-coffee.svg'
import irishCoffee from '../assets/irish-coffee.svg'
import latte from '../assets/latte.svg'
import macchiato from '../assets/macchiato.svg'
import mochaccino from '../assets/mochaccino.svg'

export const COFFEE_OBJECT: CoffeeObject = {
  traditionalEspresso: {
    name: 'Traditional Espresso',
    description: 'A classic and traditional Espresso for the espresso purists.',
    price: 9.9,
    tags: ['traditional'],
    imageSrc: traditionalEspresso,
  },
  americanEspresso: {
    name: 'American Espresso',
    description:
      'A classic Americano espresso, made from high-quality coffee beans.',
    price: 9.9,
    tags: ['traditional'],
    imageSrc: americanEspresso,
  },
  creamyEspresso: {
    name: 'Creamy Espresso',
    description:
      'A luscious and creamy Espresso for those who enjoy a rich coffee experience.',
    price: 9.9,
    tags: ['traditional'],
    imageSrc: creamyEspresso,
  },
  icedEspresso: {
    name: 'Iced Espresso',
    description:
      'A refreshing Iced Espresso to satisfy your caffeine cravings on a hot day.',
    price: 9.9,
    tags: ['traditional', 'iced'],
    imageSrc: icedEspresso,
  },
  cafeAuLait: {
    name: 'Café au Lait',
    description:
      'A delightful Café au Lait made by blending coffee and milk for a creamy experience.',
    price: 9.9,
    tags: ['traditional', 'milk'],
    imageSrc: cafeAuLait,
  },
  latte: {
    name: 'Latte',
    description:
      'A classic Latte made with espresso and steamed milk, topped with a thin layer of foam.',
    price: 9.9,
    tags: ['traditional', 'milk'],
    imageSrc: latte,
  },
  cappuccino: {
    name: 'Cappuccino',
    description:
      'A classic Cappuccino with a perfect balance of espresso, steamed milk, and foam.',
    price: 9.9,
    tags: ['traditional', 'milk'],
    imageSrc: cappuccino,
  },
  macchiato: {
    name: 'Macchiato',
    description:
      'A simple and bold Macchiato with a shot of espresso and a dollop of frothy milk.',
    price: 9.9,
    tags: ['traditional', 'milk'],
    imageSrc: macchiato,
  },
  mochaccino: {
    name: 'Mochaccino',
    description:
      'Indulge in the delightful combination of chocolate and espresso in a Mochaccino.',
    price: 9.9,
    tags: ['traditional', 'milk'],
    imageSrc: mochaccino,
  },
  hotChocolate: {
    name: 'Hot Chocolate',
    description:
      'Indulge in a soothing cup of Hot Chocolate, perfect for chocolate lovers.',
    price: 9.9,
    tags: ['especial', 'milk'],
    imageSrc: hotChocolate,
  },
  cubanCoffee: {
    name: 'Cuban Coffee',
    description:
      'Experience the bold flavors of Cuban Coffee with a touch of sweetness.',
    price: 9.9,
    tags: ['especial', 'alcoholic', 'iced'],
    imageSrc: cubanCoffee,
  },
  hawaiianCoffee: {
    name: 'Hawaiian',
    description: 'Savor the tropical flavors of Hawaiian coffee in every sip.',
    price: 9.9,
    tags: ['especial'],
    imageSrc: hawaiianCoffee,
  },
  arabianCoffee: {
    name: 'Arabian',
    description:
      'A rich and aromatic Arabian coffee, known for its unique flavor profile.',
    price: 9.9,
    tags: ['especial'],
    imageSrc: arabianCoffee,
  },
  irishCoffee: {
    name: 'Irish Coffee',
    description:
      'Enjoy the warmth of Irish Coffee with a touch of Irish whiskey and cream.',
    price: 9.9,
    tags: ['especial', 'alcoholic'],
    imageSrc: irishCoffee,
  },
}
