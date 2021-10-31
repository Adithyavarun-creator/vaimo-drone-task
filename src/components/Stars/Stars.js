import React from 'react'
import {FaRegStar,FaStar,FaStarHalfAlt,FaRegComment} from 'react-icons/fa'

import './Stars.styles.css'

const Stars =({rating,reviews,totalbuyers,count})=>{
    //console.log(rating,reviews,totalbuyers,count);

    return(
        <div>
           <span className="above-one">
               {rating >=1 ? <FaStar /> : rating >=0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
           </span>

           <span className="above-two">
               {rating >=2 ? <FaStar /> : rating >=1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
           </span>

           <span className="above-three">
               {rating >=3 ? <FaStar /> : rating >=2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
           </span>

           <span className="above-four">
               {rating >=4 ? <FaStar /> : rating >=3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
           </span>

           <span className="above-five">
               {rating >=5 ? <FaStar /> : rating >=4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
           </span>

           <span className="rating">  {rating}  -  {count} Reviews -  {totalbuyers} buyers</span>
        </div>
    )
}

export default Stars