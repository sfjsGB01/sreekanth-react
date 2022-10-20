import React from 'react'

function Product({ name, price }) {
  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
    </tr>
  )
}

export default Product
