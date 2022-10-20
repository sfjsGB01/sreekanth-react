import React from 'react'

import CategoryProductGroup from './CategoryProductGroup'

function Display() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {productData.map((category) => (
          <CategoryProductGroup key={category.id} data={category} />
        ))}
      </tbody>
    </table>
  )
}

export default Display

const productData = [
  {
    id: 100,
    categoryName: 'Sporting Goods',
    products: [
      {
        name: 'Football',
        price: 45,
      },
      {
        name: 'Baseball',
        price: 60,
      },
      {
        name: 'Basketball',
        price: 40,
      },
    ],
  },
  {
    id: 200,
    categoryName: 'Electronics',
    products: [
      {
        name: 'iPhone',
        price: 4500,
      },
      {
        name: 'iPad',
        price: 1005,
      },
      {
        name: 'Laptop',
        price: 2546,
      },
    ],
  },
]
