
import React from 'react'


export const SignDescription = ({ sign, language }) => {

    return(
        <div className="text-center mt-4">
            <h3>{language === 'en' ? `Your sign is ${sign.en.name}` : `Tú signo es ${sign.es.name}`}</h3>
            <p className="pt-3 sign__description">
                <img />
                { language === 'en' ? sign.en.description : sign.es.description }
            </p>
        </div>
    )
}