import React from 'react'

import Category from './Category'
import Product from './Product'

function CategoryProductGroup({ data }) {
  return (
    <>
      <Category title={data.categoryName} />

      {data.products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </>
  )
}

export default CategoryProductGroup
