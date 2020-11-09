
import React from 'react'

export const ContainerError = ({ errors = [] }) => {

    return (
        <div className="mt-4">
            <ul className="row panel__errors mr-4 ml-4 pl-4 pr-4 justify-content-center">
                {errors.map(message => <li className="text-center">{ message }</li>)}
            </ul>
        </div>
    )
}