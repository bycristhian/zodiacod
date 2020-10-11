
import React from 'react'


const LanguageHeader = ({ handleLanguageChange, language }) => {

    return (
        <div className="header__languages right-0 top-0">
            <select onChange={handleLanguageChange} defaultValue={language}>
                <option value="en">{language === 'en' ? "English" : "Inglés"}</option>
                <option value="es">{language === 'en' ? "Spanish" : "Español"}</option>
            </select>
        </div>
    )
}

export default LanguageHeader