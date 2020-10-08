import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'


const Home = () => {
    return(
        <div className="position-absolute w-100 h-100 main">
            <div className="row h-100 w-100 justify-content-center align-items-center">
                <Link to="/my-sign/" className="text-decoration-none">
                    <div className="card p-3 m-3 shadow-lg btn">
                        <h2>Mi signo</h2>
                    </div>
                </Link>

                <Link to="/compatibility/" className="text-decoration-none">
                    <div className="card p-3 m-3 shadow-lg btn">
                        <h2>Compatibilidad</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home