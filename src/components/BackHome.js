
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../img/home.png'


export const BackHome = () => {
    return(
        <Link to="/" className="bg-white back__home left-0 p-2 top-0 text-center">
            <img src={image} height="24" width="24" />
        </Link>
    )
}
