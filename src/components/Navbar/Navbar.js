import React from 'react'
import { navigations } from '../../utils/utils'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'
import { useUserContext } from '../../context/user-context'

const Navbar=()=>{

const {myUser} = useUserContext()

    return(
        <nav className="navigations">
                {
                    navigations.map((nav)=>{
                        return <div className="list-items"
                        key={nav.id}>
                            <Link className="links" to={nav.url}>{nav.text}</Link>
                            </div>
                    })
                }

                {
                    myUser ? <Link to="/task" className="task">Hey 🖐️! Thanks for logging in 👍🏻 Click me to see the Task </Link> : null
                }
        </nav>
    )
}

export default Navbar
