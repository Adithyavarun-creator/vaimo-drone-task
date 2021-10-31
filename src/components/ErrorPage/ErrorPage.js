import React from 'react'
import './ErrorPage.styles.css'

import {FaSignal} from 'react-icons/fa'

const ErrorPage = () =>{
    return(
        <div className="error-container">
            <FaSignal className="icon"/>
            <h1 className="error-404">404</h1>
            <h2 className="error">You have an issue with your network connection</h2>
        </div>
    )
}

export default ErrorPage