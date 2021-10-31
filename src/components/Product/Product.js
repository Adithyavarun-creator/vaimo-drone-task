import React,{useState} from 'react'
import './Product.styles.css'
import { useProductContext } from '../../context/product-context'
import Spinner from '../Spinner/Spinner'
import {FaStar} from 'react-icons/fa'

const Product = ({description,id,category,rating,image,title,price}) =>{

const { products_loading } = useProductContext()

    const [less,SetLess] = useState(true)

    const showless = less ? description.slice(0,103) : description

    const setdescription = () =>{
        SetLess(!less)
    }

    if(products_loading){
        return <Spinner />
    }

    return(
        <div className="product-article" key={id}>
        <h1 className="category">{category} - {rating.rate} <FaStar className="star-icon"/></h1>
        <img className="image-view" src={image} alt={category}/>
        <h2 className="title-view">{title} from $ {price} onwards</h2>
        <h3>{showless}...</h3>
        <span className="buttons" onClick={setdescription}>
          {less ? "Read More" : "Show Less"}</span>
        </div>
    )
}

export default Product