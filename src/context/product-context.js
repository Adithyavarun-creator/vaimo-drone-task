import React,{useReducer,useContext,useEffect} from 'react'
import reducer from '../reducers/product-reducer'
import { url,homepageurl } from '../utils/utils'
import axios from 'axios'
import {
    PRODUCTS_BEGIN,
 PRODUCTS_SUCCESS,
 PRODUCTS_ERROR,
 SINGLE_PRODUCT_BEGIN,
  SINGLE_PRODUCT_SUCCESS,
 SINGLE_PRODUCT_ERROR,
 FEATURES_1080P,
 FEATURES_4K,
 FEATURES_BATTERY_ACCESSORIES,
 SHIPPING_DETAILS,
 GET_PRODUCT_NAME_AND_TAG,
 GET_RATING_DETAILS,
 INCREASE_QUANTITY,
 DECREASE_QUANTITY,
 TOTAL_PRICE,
 PRODUCT_IMAGE,
 GET_DISCOUNT_END_DATE,
 CART_TOTALS,
 LABEL_FOR_1080P,
 PRICE_FOR_1080P,
 CURRENCYCODE_FOR_1080P,
 CURRENCYFORMAT_FOR_1080P,
 OLDPRICE_FOR_1080P,
 OLDPRICE_CURRENCYCODE_FOR_1080P,
 OLDPRICE_CURRENCYSYMBOL_FOR_1080P,
 OLDPRICE_CURRENCYFORMAT_FOR_1080P
} from '../actions/actions'


const initialState ={
    products:[],
    products_loading:false,
    products_success:false,
    products_error:false,
    single_product:{},
    single_product_loading:false,
    single_product_error:false,
    single_product_success:false,
    //1080p
    labelfor_1080p:'',
    pricefor_1080p:'',
    currencycode_1080p:'',
    currencysymbol_1080p:'',
    currencyformat_1080p:'',
    oldprice_1080p:'',
    oldprice_currencycode_1080p:'',
    oldprice_currencysymbol_1080p:'',
    oldprice_currencyformat_1080p:'',
    //4k
    labelfor_4k:'',
    pricefor_4k:'',
    currencycode_4k:'',
    currencysymbol_4k:'',
    currencyformat_4k:'',
    oldprice_4k:'',
    oldprice_currencycode_4k:'',
    oldprice_currencysymbol_4k:'',
    oldprice_currencyformat_4k:'',

    //for battery_accessories
    labelfor_battery_accessory:'',
    pricefor_battery_accessory:'',
    currencycode_battery_accessory:'',
    currencysymbol_battery_accessory:'',
    currencyformat_battery_accessory:'',
    oldprice_battery_accessory:'',
    oldprice_currencycode_battery_accessory:'',
    oldprice_currencysymbol_battery_accessory:'',
    oldprice_currencyformat_battery_accessory:'',

    //for shipping
     get_shipping:'',
     shipping_props:'',
     ready_to_ship:'',
     in_stock:'',
     fast_dispatch:'',

     //shipping method
     shipping_country:'',
     shipping_title:'',
     shippingtime_leadvalue:'',
     shippingtime_info:'',

     //shipping cost
     shipping_cost_value:'',
     shipping_currencycode:'',
     shipping_currencysymbol:'',
     shipping_currencyformat:'',


    
     //product name
     product_name:'',
     product_tags:'',

     //for discount,reviews,count
     get_discount:'',
     discount_amount:'',
     discount_end_date:'',
     get_review:'',
     get_review_count:'',
     get_rating:'',
     get_total_buyers:'',

     //increase and descrease quantity
     quantity_for_1080p:0,
     quantity_for_4k:0,
     quantity_for_battery:0,

     //carttotals
     total_price:0,

     //image
     productimage:''
}


const ProductContext = React.createContext()

export const ProductProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)


    const homepagedummyproducts = async(homepageurl) =>{
        dispatch({
            type:PRODUCTS_BEGIN
        })
        try{
            const response = await axios.get(homepageurl)
            const homepageproduct = response.data
           //console.log(homepageproduct);
            dispatch({
                type:PRODUCTS_SUCCESS,
                payload:homepageproduct
            })
        }catch(error){
            console.log(`error is ${error.message}`);
            dispatch({
                type:PRODUCTS_ERROR
            })
        }
    }


    const fetchgivenproduct = async(url) =>{
        dispatch({
            type:SINGLE_PRODUCT_BEGIN
        })
        try{
            const response = await axios.get(url)
            const singleproduct = response.data.product
            //console.log(singleproduct);

            dispatch({
                type:GET_RATING_DETAILS,
                payload:singleproduct
            })
            //for discount
            const getdiscount = singleproduct.discount
            const discountamount = getdiscount.amount
            const discountenddate = getdiscount.end_date
            const gettags = singleproduct.tags
            //console.log(singleproduct);

            dispatch({
                type:GET_DISCOUNT_END_DATE,
                payload:discountenddate
            })
            

            //for reviews and rating
            const getreviews = singleproduct.reviews
            const getcount = getreviews.count
            const getrating = getreviews.rating
            const gettotalbuyers = getreviews.total_buyers
            //console.log(getcount);


            const getoptions = Object.entries(singleproduct.options)
            
            //for 1080p
            const get1080p = getoptions[0]
            const get1080pvalues = get1080p[1]
            dispatch({
                type:FEATURES_1080P,
                payload:get1080pvalues
            })

            dispatch({
                type:TOTAL_PRICE,
                payload:singleproduct
            })

            dispatch({
                type:PRODUCT_IMAGE,
                payload:singleproduct
            })

        
    
        
            
            
            //for 4k

            const get4k = getoptions[1]
            const get4kvalues = get4k[1]
            
            dispatch({
                type:FEATURES_4K,
                payload:get4kvalues
            })

           


            //for battery accessories 
            const getbatteryaccess = getoptions[2]
            const getbatteryaccessvalues = getbatteryaccess[1]
            
            dispatch({
                type:FEATURES_BATTERY_ACCESSORIES,
                payload:getbatteryaccessvalues
            })


            const getname = singleproduct
            dispatch({
                type:GET_PRODUCT_NAME_AND_TAG,
                payload:getname
            })
            
            const getshipping = singleproduct.shipping
            dispatch({
                type:SHIPPING_DETAILS,
                payload:getshipping
            })
           
            dispatch({
                type:SINGLE_PRODUCT_SUCCESS,
                payload:singleproduct
                
            })
        }catch(error){
            console.log(`error is ${error.message}`);
            dispatch({
                type:SINGLE_PRODUCT_ERROR
            })
        }
        
    }

    const increasequantityfor1080p = (quantity_for_1080p) =>{
        dispatch({
            type:INCREASE_QUANTITY,
            payload:{quantity_for_1080p}
        })
    }


    useEffect(() => {
       homepagedummyproducts(homepageurl)
    }, [])

        useEffect(() => {
           fetchgivenproduct(url)
        }, [])



    return(
        <ProductContext.Provider value={{
            ...state,
            fetchgivenproduct,
            homepagedummyproducts,
            increasequantityfor1080p,
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () =>{
    return useContext(ProductContext)
}