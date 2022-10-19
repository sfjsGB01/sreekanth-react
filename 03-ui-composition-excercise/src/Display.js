import React from 'react'

import Category from './Category'
import Product from './Product'

function Display() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <Category title='Sporting Goods' />

        <Product name='Football' price='45' />
        <Product name='Baseball' price='60' />
        <Product name='Basketball' price='40' />

        <Category title='Electronics' />

        <Product name='iPhone' price='4500' />
        <Product name='iPad' price='1005' />
        <Product name='Laptop' price='2546' />
      </tbody>
    </table>
  )
}

export default Display
