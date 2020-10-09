
import React from 'react'
import useLanguage from '../hooks/useLanguage'


const LanguageHeader = ({ handleLanguageChange, language }) => {

    return (
        <div className="position-absolute right-0 top-0">
            <select onChange={handleLanguageChange}>
                <option value="es">{language == 'en' ? "Spanish" : "Español"}</option>
                <option value="en">{language == 'en' ? "English" : "Inglés"}</option>
            </select>
        </div>
    )
}

export default LanguageHeader