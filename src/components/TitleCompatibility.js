import React, { useEffect, useState } from 'react'


const TitleCompatibility = ({ language, valueSigns }) => {

    const [title, setTitle] = useState("")
    const { ownSign, partnerSign } = valueSigns

    useEffect(() => {
        if (language === 'en'){
            ownSign === null ? setTitle("Select your sign") : setTitle("Select the sign of your partner")
        } else if (language === 'es'){
            ownSign === null ? setTitle("Selecciona tú signo") : setTitle("Selecciona el signo de tú pareja")
        }
                
    }, [language, valueSigns])

    return (
        <div className="position-relative d-flex justify-content-center mt-4 mb-4">
            <div className="container__title p-4">
                <h1 className="text-white text-center">{ title }</h1>
            </div>
        </div>
    )
}

export default TitleCompatibility