import {
 PRODUCTS_SUCCESS,
 PRODUCTS_ERROR,
 SINGLE_PRODUCT_SUCCESS,
 SINGLE_PRODUCT_ERROR, 
 SINGLE_PRODUCT_BEGIN,
 UPDATE_QUANTITY,
 PRODUCTS_BEGIN,
 FEATURES_1080P,
 FEATURES_4K,
 FEATURES_BATTERY_ACCESSORIES,
 SHIPPING_DETAILS,
 GET_PRODUCT_NAME_AND_TAG,
 GET_RATING_DETAILS,
 INCREASE_QUANTITY,
 GET_DISCOUNT_END_DATE,
 DECREASE_QUANTITY,
 TOTAL_PRICE,
 PRODUCT_IMAGE,
 CART_TOTALS,
} from '../actions/actions'



const reducer = (state,action) =>{

    if(action.type === SINGLE_PRODUCT_BEGIN){
        return{
            ...state,
            single_product_loading:true,
            single_product_error:false,
        }
    }

    if(action.type === SINGLE_PRODUCT_SUCCESS){

        //  const transformedproduct = Object.entries(action.payload)
        //  console.log(transformedproduct);
        // const obj=[]
        // const getkeys = action.payload[obj]

        return{
            ...state,
            single_product:action.payload,
            single_product_loading:false,
            single_product_error:false,
            single_product_success:true
        }
    }

    if(action.type === SINGLE_PRODUCT_ERROR){
        return{
            ...state,
            single_product_error:true,
            single_product_success:false
        }
    }


    if(action.type === PRODUCTS_BEGIN){
        return{
            ...state,
           products_begin:true
        }
    }

    if(action.type === PRODUCTS_SUCCESS){

        // const ratedproducts = action.payload.filter((prod)=>
        //  prod.rating >= 4)

        // const priceproducts = action.payload.filter((prod)=>
        // prod.price >= 100)

        return{
            ...state,
            products:action.payload,
            products_begin:false,
            products_success:true,
            products_error:false,
        }
    }

    if(action.type === PRODUCTS_ERROR){
        return{
            ...state,
            products_loading:false,
            products_error:true,
        }
    }

    if(action.type === FEATURES_1080P){
        const givenlabel = action.payload.label
        const pricefor1080p = action.payload.price.value
            const currencycodefor1080p = action.payload.price.currency.code
            const currencysymbolfor1080p = action.payload.price.currency.symbol
            const currencyformatfor1080p = action.payload.price.currency.format

            const oldpricevaluefor1080p = action.payload.old_price.value
            const oldpricecurrencycodefor1080p = action.payload.old_price.currency.code
            const oldpricecurrencysymbolfor1080p = action.payload.old_price.currency.symbol
            const oldpricecurrencyformatfor1080p = action.payload.old_price.currency.format
            //console.log(oldpricevaluefor1080p,oldpricecurrencycodefor1080p,oldpricecurrencysymbolfor1080p,oldpricecurrencyformatfor1080p);
        
            return{
            ...state,
            single_product_success:true,
            labelfor_1080p:givenlabel,
            pricefor_1080p:pricefor1080p,
            currencycode_1080p:currencycodefor1080p,
            currencysymbol_1080p:currencysymbolfor1080p,
            currencyformat_1080p:currencyformatfor1080p,
            oldprice_1080p:oldpricevaluefor1080p,
            oldprice_currencycode_1080p:oldpricecurrencycodefor1080p,
            oldprice_currencysymbol_1080p:oldpricecurrencysymbolfor1080p,
            oldprice_currencyformat_1080p:oldpricecurrencyformatfor1080p,
        }
    }

    if(action.type === FEATURES_4K){
        const labelfor4k = action.payload.label
            const pricevaluefor4k = action.payload.price.value
            const currencycodefor4k = action.payload.price.currency.code
            const currencysymbolfor4k = action.payload.price.currency.symbol
            const currencyformatfor4k = action.payload.price.currency.format
            const oldpricevaluefor4k = action.payload.old_price.value
            const oldpricecurrencycodefor4k = action.payload.old_price.currency.code
            const oldpricecurrencysymbolfor4k = action.payload.old_price.currency.symbol
            const oldpricecurrencyformatfor4k = action.payload.old_price.currency.format
        
            return{
            ...state,
            labelfor_4k:labelfor4k,
            pricefor_4k:pricevaluefor4k,
            currencycode_4k:currencycodefor4k,
            currencysymbol_4k:currencysymbolfor4k,
            currencyformat_4k:currencyformatfor4k,
            oldprice_4k:oldpricevaluefor4k,
            oldprice_currencycode_4k:oldpricecurrencycodefor4k,
            oldprice_currencysymbol_4k:oldpricecurrencysymbolfor4k,
            oldprice_currencyformat_4k:oldpricecurrencyformatfor4k,
        }
    }
    
    if(action.type === FEATURES_BATTERY_ACCESSORIES){
        const labelforbatteryaccess = action.payload.label
        const pricevalueforbatteryaccess = action.payload.price.value
        const currencycodeforbatteryaccess = action.payload.price.currency.code
        const currencysymbolforbatteryaccess = action.payload.price.currency.symbol
        const currencyformatforbatteryaccess = action.payload.price.currency.format
        const oldpricevalueforbatteryaccess = action.payload.old_price.value
        const oldpricecurrencycodeforbatteryaccess = action.payload.old_price.currency.code
        const oldpricecurrencysymbolforbatteryaccess = action.payload.old_price.currency.symbol
        const oldpricecurrencyformatforbatteryaccess = action.payload.old_price.currency.format
        
        return{
            ...state,
            labelfor_battery_accessory:labelforbatteryaccess,
            pricefor_battery_accessory:pricevalueforbatteryaccess,
            currencycode_battery_accessory:currencycodeforbatteryaccess,
            currencysymbol_battery_accessory:currencysymbolforbatteryaccess,
            currencyformat_battery_accessory:currencyformatforbatteryaccess,
            oldprice_battery_accessory:oldpricevalueforbatteryaccess,
            oldprice_currencycode_battery_accessory:oldpricecurrencycodeforbatteryaccess,
            oldprice_currencysymbol_battery_accessory:oldpricecurrencysymbolforbatteryaccess,
            oldprice_currencyformat_battery_accessory:oldpricecurrencyformatforbatteryaccess,
        }
    }

    if(action.type === SHIPPING_DETAILS){
        //console.log(action.payload);
        const shippingprops = action.payload.props
        const readytoship = action.payload.props.ready_to_ship
        const instock = action.payload.props.in_stock
        const fastdispatch = action.payload.props.fast_dispatch
        const shippingcountry = action.payload.method.country
        const shippingtitle = action.payload.method.title
        const shippingleadtime = action.payload.lead_time.value
        const shippingtimeinfo = action.payload.method.shipping_time.value
        const shippingcostvalue = action.payload.method.cost.value
        const shippingcurrencycode = action.payload.method.cost.currency.code
        const shippingcurrencysymbol = action.payload.method.cost.currency.symbol
        const shippingcurrencyformat = action.payload.method.cost.currency.format
        
        //console.log(shippingleadtime,shippingtimeinfo);
        return{
            ...state,
            get_shipping:'',
            shipping_props:shippingprops,
            ready_to_ship:readytoship,
            in_stock:instock,
            fast_dispatch:fastdispatch,

            shipping_country:shippingcountry,
            shipping_title:shippingtitle,
            shippingtime_leadvalue:shippingleadtime,
            shippingtime_info:shippingtimeinfo,

            //shipping cost
            shipping_cost_value:shippingcostvalue,
            shipping_currencycode:shippingcurrencycode,
            shipping_currencysymbol:shippingcurrencysymbol,
            shipping_currencyformat:shippingcurrencyformat,

        }
    }

    if(action.type === GET_PRODUCT_NAME_AND_TAG){
        const productname = action.payload.name
        const producttag = action.payload.tags
        //console.log(producttag);
        return{
            ...state,
            product_name:productname,
            product_tags:producttag
        }
    }

    if(action.type === GET_RATING_DETAILS){
        const allrating = action.payload //is singleproduct
        const getdiscount = allrating.discount
        const discountamount = getdiscount.amount
        const discountenddate = getdiscount.end_date
        const getreviews = allrating.reviews
            const getcount = getreviews.count
            const getrating = getreviews.rating
            const gettotalbuyers = getreviews.total_buyers
        return{
            ...state,
            get_discount:getdiscount,
            discount_amount:discountamount,
            discount_end_date:discountenddate,
            get_review:getreviews,
            get_review_count:getcount,
            get_rating:getrating,
            get_total_buyers:gettotalbuyers,
        }
    }


    if(action.type === TOTAL_PRICE){
        // const {quantity_for_1080p,
        //     quantity_for_4k,
        //     quantity_for_battery} = state
            //console.log(quantity_for_1080p,quantity_for_4k,quantity_for_battery);
        //console.log(action.payload);
        // const getquantity1080p = state.quantity_for_1080p
        // const getquantity4k = state.quantity_for_4k
        // const getquantitybattery = state.quantity_for_battery
        //console.log(getquantity1080p,getquantity4k,getquantitybattery);
        const getoptions = Object.entries(action.payload.options)
        //console.log(getoptions);
        const get1080p = getoptions[0]
        const get1080pvalues = get1080p[1]
        const get4k = getoptions[1]
        const get4kvalues = get4k[1]
        const getbatteryaccess = getoptions[2]
        const getbatteryaccessvalues = getbatteryaccess[1]
        // console.log(get1080pvalues);
        const calculate1080pvalue = get1080pvalues.price.value
        const calculate4kvalue = get4kvalues.price.value
        const calculatebatteryvalue = getbatteryaccessvalues.price.value
        //console.log(calculate1080pvalue,calculate4kvalue,calculatebatteryvalue);

        const quantityfor1080p = calculate1080pvalue * state.quantity_for_1080p
        const quantityfor4k = calculate4kvalue * state.quantity_for_4k
        const quantityforbattery = calculatebatteryvalue * state.quantity_for_battery

        //console.log(quantityfor1080p,quantityfor4k,quantityforbattery);

         const totalamountcalculate = quantityfor1080p+quantityfor4k+quantityforbattery
         //console.log(totalamountcalculate);
        
        return{
            ...state,
            quantity_for_1080p:state.quantity_for_1080p,
            quantity_for_4k:state.quantity_for_4k,
            quantity_for_battery:state.quantity_for_4k,
            total_price:totalamountcalculate
        }
    }

    if(action.type === PRODUCT_IMAGE){
        //console.log(action.payload);
        const getimage = action.payload.gallery[0].main
       //console.log(getimage);
        return{
            ...state,
            productimage:getimage

        }
    }

    if(action.type === INCREASE_QUANTITY){
        console.log(action.payload);
        //const{quantity} = action.payload
        //console.log(quantity);
        return{
            ...state,
            quantity_for_1080p:action.payload+1,
            quantity_for_4k:action.payload+1,
            quantity_for_battery:action.payload+1
        }
    }

    if(action.type === GET_DISCOUNT_END_DATE){
        //console.log(action.payload);
        return{
            ...state,
            discount_end_date:action.payload
        }
    }
    //return state
    throw new Error(`No matching ${action.type} - is been acting`)
}

export default reducer