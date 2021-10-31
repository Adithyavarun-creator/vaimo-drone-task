import React,{useState} from 'react'
import Spinner from '../Spinner/Spinner'
import ErrorPage from '../ErrorPage/ErrorPage'
import Product from '../Product/Product'
import './ProductsPage.styles.css'

import { useProductContext } from '../../context/product-context'

const ProductsPage = () =>{

    const { products,
    products_error,
    products_loading } = useProductContext()

       

    if(products_loading){
        return <Spinner />
    }

    if(products_error){
        return <ErrorPage />
    }

      const transform = {products}
      const arraytransform = Object.entries(transform)
      //console.log(arraytransform);



    return(
        <div className="container">
            <h1 className="heading1">👇 View the high Rated products here 👇</h1>
            <div>
                        {
                             products.map((product)=>{
                                return <Product key={product.id} {...product} />
                            })
                        }
            </div>
        </div>
    )
}


export default ProductsPage