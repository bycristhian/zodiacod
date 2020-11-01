import React, { useState } from 'react'
import Sign from '../components/Sign'
import { signs } from '../data/signsRepository'
import useLanguage from '../hooks/useLanguage'
import LanguageHeader from '../components/LanguageHeader'

import '../styles/compatibility.css'
import TitleCompatibility from '../components/TitleCompatibility'
import Modal from '../components/Modal'


// This Component manage compatibility page
const Compatibility = () => {

    const [language, setLanguage] = useLanguage()
    const [valueSigns, setValueSigns] = useState({ ownSign: null, partnerSign: null })
    const { ownSign, partnerSign } = valueSigns

    const handleLanguageChange = ({ target }) => {
        setLanguage(target.value)
    }

    const handleClickSign = (id) => {
        if (!ownSign){
            setValueSigns({ ...valueSigns, ownSign: signs.find(ele => ele.id === id) })
        } else {
            setValueSigns({ ...valueSigns, partnerSign: signs.find(ele => ele.id === id) })
        }
    }

    const handleCloseModal = () => {
        setValueSigns({ ...valueSigns, ownSign: null, partnerSign: null})
    }

    return (
        <>
            {ownSign !== null && partnerSign !== null ? 
                <Modal ownSign={ownSign} language={language} partnerSign={partnerSign} handleCloseModal={handleCloseModal} /> 
                : null
            }
            <div className="position-absolute w-100 container__compatibility">

                {ownSign !== null && partnerSign !== null ? 
                    <div className="placeholder__modal"></div> 
                    : null
                }

                <LanguageHeader handleLanguageChange={handleLanguageChange} language={language} />

                <TitleCompatibility language={language} valueSigns={valueSigns} />

                <div className="row justify-content-center align-items-stretch mt-4 h-100">
                    {signs.map((sign) => (
                        <Sign content={sign} language={language} handleClickSign={handleClickSign} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Compatibility