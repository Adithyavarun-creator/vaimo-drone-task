import React from "react"
import { useUserContext } from "../../context/user-context"
import './SignIn.styles.css'

const SignIn = () =>{

    const {loginWithRedirect} = useUserContext()

    return(
        <div className="sign-in">
            <h1 className="header-content">Click here to Sign In</h1>
            <button className = "sign-in-btn"
            onClick={loginWithRedirect}>Click Me....</button>
            <h2 className="credentials">
            You can use this credentials to login 
            <br />
            Username: Iampro@pro.com
            <br />
            Password: Programmer2021
            </h2>
        </div>
    )
}

export default SignIn