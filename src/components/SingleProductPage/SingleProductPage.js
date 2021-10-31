import React,{useEffect,useState} from 'react'
import { useProductContext } from '../../context/product-context'
import { url } from '../../utils/utils'
import { useHistory } from 'react-router'
import Stars from '../Stars/Stars'
import {FaArrowCircleRight,FaUserShield,FaBoxOpen,FaShoppingCart,FaUserMinus,
    FaCcVisa,FaCcMastercard,FaApplePay,FaShippingFast, FaUserPlus} from 'react-icons/fa'
import { useUserContext } from '../../context/user-context'
import CountDownList from '../CountDownList/CountDownList'
import './SingleProductPage.styles.css'

const pricefor1080p=833.99
const pricefor4k=895.31
const priceforbattery=78.5
    

 const SingleProductPage = () => {

    const {fetchgivenproduct,
         //product name
     product_name,
     product_tags,
    labelfor_1080p,
    pricefor_1080p,
    currencysymbol_1080p,
    labelfor_4k,
    pricefor_4k,
    currencysymbol_4k,

    //for battery_accessories
    labelfor_battery_accessory,
    pricefor_battery_accessory,
    currencysymbol_battery_accessory,


    //for shipping
   
    ready_to_ship,
    in_stock,
    fast_dispatch,

    //shipping method
    shipping_country,
    shipping_title,
    shippingtime_leadvalue,
    shippingtime_info,

    //shipping cost

    shipping_currencysymbol,


     //quantity
     quantity_for_1080p,
     quantity_for_4k,
     quantity_for_battery,
     //totalprice
     //discount,review and count
     discount_amount,
     get_review,
     get_review_count,
     get_rating,
     get_total_buyers,
     productimage,
} = useProductContext()


        const {myUser,logout,loginWithRedirect} = useUserContext()
         //console.log(myUser);
        
useEffect(() => {
    fetchgivenproduct(`${url}`)
 }, [url])
   
   
const [for1080p,Setfor1080p] = useState(quantity_for_1080p)
const [for4k,Setfor4k] = useState(quantity_for_4k)
const [forbattery,Setforbattery] = useState(quantity_for_battery)


const incrementhandlerfor1080p = () =>{
    Setfor1080p(for1080p+1)
 }

 const decrementhandlerfor1080p = () =>{
     Setfor1080p(for1080p-1)
     if(for1080p <= 1){
         Setfor1080p(0)
     }
 }

const incrementhandlerfor4k = () =>{
    Setfor4k(for4k+1)
}

const decrementhandlerfor4k = () =>{
    Setfor4k(for4k-1)
    if(for4k <= 1){
        Setfor4k(0)
    }
}

const incrementhandlerforbattery = () =>{
    Setforbattery(forbattery+1)
}

const decrementhandlerforbattery = () =>{
    Setforbattery(forbattery-1)
    if(forbattery <= 1){
        Setforbattery(0)
    }
}




        return (
        <div className="content-container">
            <nav>
                {
                    myUser ? <p className="welcome"> 👨‍💻 Hello {myUser.nickname}</p>  : <p className="welcome"> 👨‍💻 Welcome ! Please sign in for purchasing</p>
                }
                </nav>
            <img src={productimage} alt="name" className="image-set"/>
             <article className="details">
             <p>Ship to {shipping_country}  {shipping_title} </p>
            <p>Your quantity is <span className="quantity">{for1080p + for4k + forbattery}</span></p>
             <p>Total amount is <span className="total-price">{shipping_currencysymbol} {Math.round(for1080p*pricefor1080p + for4k*pricefor4k + forbattery*priceforbattery)}</span></p>
            <p>Lead time {shippingtime_leadvalue}</p>
            <p>Shipping time {shippingtime_info}</p>
            
                {myUser ? <button className ="sign-out-button" onClick={logout}>Logout <FaUserMinus className="logout-icon"/></button> : 
                <button className="sign-in-btn" onClick={loginWithRedirect}>Login <FaUserPlus className="login-icon"/></button> }

            <button className="contact-button">Contact the supplier</button>
            </article>
            <div className="product-detail-container">
           <h4 className="shipping"><FaShoppingCart className="cart-icon"/> {ready_to_ship && "Ready To Ship"}</h4>
        <h4 className="stock"><FaBoxOpen className="box-icon"/> {in_stock && "In Stock"}</h4>
        <h4 className="dispatch"><FaShippingFast className="shipping-icon"/> {fast_dispatch && "Fast Dispatch"}</h4>
          <h3 className="product-desc">This is {product_name}  <span className="tags">{product_tags}</span></h3>
                
                <Stars rating={get_rating}
                reviews={get_review}
                count={get_review_count}
                totalbuyers={get_total_buyers}/>

                <br />
            <h3 className="options">{shipping_currencysymbol} {pricefor_battery_accessory} - {shipping_currencysymbol} {pricefor_4k} / Option 2 Options(Min.Order)</h3>
            <br />
            <div className="info-box">
            <h3 className="delivery-info">March Expo  <FaArrowCircleRight className="right-icon"/>Free shipping (up to $40)  <FaArrowCircleRight className="right-icon"/>On time-delivery guaranteed</h3>
        <div className="discounts">
            <span className="amount">{discount_amount} </span>
             OFF Discount ends in <CountDownList className="discount-icon"/>
        </div>
        </div>

        <div className="list-container">
                   <span className="list1080p">               
                       {labelfor_1080p}  <span className="currency-1080p">{currencysymbol_1080p} {pricefor_1080p} </span> 
                       <button className="inc1080p" onClick={decrementhandlerfor1080p}> - </button>
                       <input type="number" className="input1080p" value={for1080p}/>
                       <button className="dec1080p" onClick={incrementhandlerfor1080p}> + </button>
                    </span>
                    <span className="list4k">
                       {labelfor_4k}  <span className="currency-4k">{currencysymbol_4k} {pricefor_4k} </span> 
                       <button  className="inc4k" onClick={decrementhandlerfor4k}> - </button>
                       <input type="number" className="input4k" value={for4k} />
                       <button  className="dec4k" onClick={incrementhandlerfor4k}> + </button>
                   </span>
                   <span className="listbattery">
                       {labelfor_battery_accessory}  <span className="currency-battery">{currencysymbol_battery_accessory} {pricefor_battery_accessory} </span> 
                       <button  className="incbattery" onClick={decrementhandlerforbattery}> - </button>
                       <input type="number" className="inputbattery" value={forbattery} />
                       <button  className="decbattery" onClick={incrementhandlerforbattery}> + </button>
                  </span>
               
        </div>
        <div className="footer-container">
            <h3><FaUserShield />  Trade Assurance protects your Alibaba.com orders</h3>
            <h3>Alibaba.com Logistics  Inspection Solutions</h3>
            <h3>Payments can be done with <FaCcVisa /> <FaCcMastercard /> <FaApplePay /></h3>
            
        </div>
        </div>
        </div>
    )
}


export default SingleProductPage




