import React from 'react'
import { Link } from 'react-router-dom'


const HomeOption = ({ content, language }) => {

    const { title, description, link, image } = content

    return (
        <div className="card p-3 m-3 col-xl-3 shadow-lg text-center rounded-lg item__option">
            <h3 className="">{ title }</h3>

            <center>
                <img src={image} className="mt-3" height="92" width="92" alt={`Image of ${title}`} />
            </center>

            <p className="mt-4">{ description }</p>

            <Link to={ link } className="btn btn-primary mb-0">{language === 'en' ? 'Start' : 'Comenzar' }</Link>
        </div>
    )
}

export default HomeOption