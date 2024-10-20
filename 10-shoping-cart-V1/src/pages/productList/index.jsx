import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ShoppingCartContext } from '../../context/context'

const ProductListPage = () => {

  const { listOfProducts } = useContext(ShoppingCartContext);

  console.log(listOfProducts);
  



  return (
    <div>
      Product List Page
    </div>
  )
}

export default ProductListPage
