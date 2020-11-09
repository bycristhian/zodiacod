import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { BackHome } from '../components/BackHome'
import { ContainerError } from '../components/ContainerError'
import LanguageHeader from '../components/LanguageHeader'
import { SignDescription } from '../components/SignDescription'
import { getMonths } from '../data/MonthRepository'
import { signs } from '../data/signsRepository'
import BirthdayValidator from '../domain/BirthdayValidator'
import useLanguage from '../hooks/useLanguage'

import '../styles/mysign.css'


const MySign = () => {

    const [language, setLanguage] = useLanguage()
    const [months, setMonths] = useState([])
    const [sign, setSign] = useState({ isSelected: false, value: {} })
    const [birthday, setBirthday] = useState({ month: 1, day: 1 })
    const [errors, setErrors] = useState([{ type: "", message: "" }])

    const handleLanguageChange = ({ target }) => {
        setLanguage(target.value)
    }

    useEffect(() => {
        setMonths(getMonths(language))
    }, [language])

    useEffect(() => {
        validateValuesForm()
    }, [birthday])

    const handleInputChange = ({ target }) => {
        setBirthday({ ...birthday, [target.name]: target.value })
    }

    const handleDiscoverSign = () => {
        if (validateValuesForm()){
            let date = moment(`${birthday.month}-${birthday.day}`, "MM-DD")
            
            let result = signs.find(sign => date.isBetween(
                getDateSign(sign.startDate), getDateSign(sign.endDate), null, '[]')
            ) || signs[signs.length - 1]

            setSign({ isSelected: true, value: result })
        }
    }

    const getDateSign = (date) => {
        let valuesDate = date.split('-')
        return moment(`${valuesDate[1]}-${valuesDate[0]}`, "MM-DD")
    }

    const validateValuesForm = () => {
        let formValidator = new BirthdayValidator(birthday)

        // Show erros if were there
        formValidator.is_valid() ? setErrors([]) : setErrors(formValidator.errors)
        return formValidator.is_valid()
    }

    return (
        <div className="row m-0 justify-content-center align-items-center h-100">

            <BackHome />
            <LanguageHeader handleLanguageChange={handleLanguageChange} language={language} />

            <h1 className="text-white mt-4 text-center m-3">
                { language === 'es' ? "¿Cúal es tú signo zodiacal?" : "What is your zodiac sign?"  }
            </h1>
            
            <div className={`bg-white col-xl-7 p-4 rounded-lg shadow mt-4 ml-4 mr-4`}>
                <div className="row justify-content-center align-items-center">
                    <div className="m-2 col-xl-7 h-100 w-100">
                        <select onChange={handleInputChange} defaultValue="1" className="form-control form-control-lg" name="month">
                            {months.map((nameMonth, counter) => 
                                <option value={counter + 1}>{ nameMonth }</option>
                            )}
                        </select>
                    </div>
                    
                    <div className="m-2 col-xl-3">
                        <input value={birthday.day} onChange={handleInputChange} name="day" className={`form-control form-control-lg ${errors.length > 0 ? "is-invalid" : ""}`} type="number" max="31" min="1" placeholder={ language === 'en' ? "Day (Number)" : "Día (Número)" } />
                    </div>
                </div>

                {errors.length > 0 ? <ContainerError errors={errors.map(ele => ele.message)} /> : null }

                <div className="row justify-content-center align-items-center p-2">
                    <button className="btn btn-primary btn-block col-xl-10 m-2" onClick={handleDiscoverSign}>
                        { language === 'es' ? "Descubrir" : "Discover" }
                    </button>
                </div>

                <hr/>

                {sign.isSelected ? 
                    <SignDescription sign={sign.value} language={language} /> 
                : null}
            
            </div>
        </div>
    )
}

export default MySign