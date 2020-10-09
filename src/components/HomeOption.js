import React from 'react'
import { Link } from 'react-router-dom'


const HomeOption = ({ content }) => {

    const { title, description, link  } = content

    return (
        <div className="card p-3 m-3 shadow-lg text-center rounded-lg max-w-md">
            <p className="text-3xl leading-tight">{ title }</p>
            <p className="text-base leading-tight text-gray-600">{ description }</p>

            <Link to={ link } className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 mt-4 border-blue-700 hover:border-blue-500 rounded text-decoration-none">Empezar</Link>
        </div>
    )
}

export default HomeOption