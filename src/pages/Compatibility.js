import React, { useState } from 'react'
import Sign from '../components/Sign'
import { signs } from '../data/signsRepository'
import useLanguage from '../hooks/useLanguage'
import LanguageHeader from '../components/LanguageHeader'

import '../styles/compatibility.css'
import TitleCompatibility from '../components/TitleCompatibility'


// This Component manage compatibility page
const Compatibility = () => {

    const [language, setLanguage] = useLanguage()
    const [valueSigns, setValueSigns] = useState({ ownSignId: null, partnerId: null })
    const { ownSignId, partnerId } = valueSigns

    const handleLanguageChange = ({ target }) => {
        setLanguage(target.value)
    }

    const handleClickSign = (id) => {
        if (!ownSignId){
            setValueSigns({ ...valueSigns, ownSignId: id })
        } else {
            setValueSigns({ ...valueSigns, partnerId: id })
        }
    }

    return (
        <div className="position-absolute w-100 container__compatibility">

            <LanguageHeader handleLanguageChange={handleLanguageChange} language={language} />

            <TitleCompatibility language={language} valueSigns={valueSigns} />

            <div className="row justify-content-center align-items-stretch mt-4 h-100">
                {signs.map((sign, counter) => (
                    <Sign content={sign} language={language} handleClickSign={handleClickSign} />
                ))}
            </div>
        </div>
    )
}

export default Compatibility