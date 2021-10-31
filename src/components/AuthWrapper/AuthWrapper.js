import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from '../Spinner/Spinner'

const AuthWrapper = ({children}) => {
  const {isLoading,error} = useAuth0()

  if(isLoading){
    return <div>
      <Spinner />
    </div>
  }

  if(error){
    return <div>
      <h4>{error.message}</h4>
    </div>
  }

  return (
    <>
    {children}
    </>
  )
}

export default AuthWrapper
