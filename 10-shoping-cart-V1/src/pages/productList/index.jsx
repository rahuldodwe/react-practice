import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ShoppingCartContext } from '../../context/context'
import ProductTle from '../../components/navbar/producttie/ProductTile';
import ProductTile from '../../components/navbar/producttie/ProductTile';

const ProductListPage = () => {

  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  if (loading) return <h1 className='text-center font-bold text-4xl py-10'>Loading data, Please wait !</h1>
  

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center ">
          <h2 className='text-3xl font-extralight text-gray-950 sm:text-4xl'>Our featured Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg-gap-8 lg:grid-cols-4">
          {
            listOfProducts && listOfProducts.length > 0 ?
            ( listOfProducts.map((singleProductTile)=> <ProductTile singleProductTile={singleProductTile} />) )   : 
            ( <h1>Loading Please wait !</h1> )
          }
        </div>
      </div>
      
    </section>
  )
}

export default ProductListPage
