import React, { useEffect } from 'react'
import HomeOption from '../components/HomeOption'
import LanguageHeader from '../components/LanguageHeader'
import useLanguage from '../hooks/useLanguage'

import '../styles/home.css'


const options = [
    {
        en: {
            title: 'My Sign',
            description: "With this option you will know your sign",
            link: "/my-sign/"
        },
        es: {
            title: 'Mi Signo',
            description: "Con esta opción sabrás que signo eres!!!",
            link: "/my-sign/"
        }
    },
    {
        en: {
            title: 'My Sign',
            description: "Lorem mi signo",
            link: "/my-sign/"
        },
        es: {
            title: 'Mi Signo',
            description: "Lorem mi signo",
            link: "/my-sign/"
        }
    }
]


const Home = () => {

    const [language, setLanguage] = useLanguage()

    const handleLanguageChange = ({ target }) => {
        setLanguage(target.value)
    }

    return(
        <div className="position-absolute w-100 h-100 main">
            <LanguageHeader handleLanguageChange={handleLanguageChange} language={language} />

            <div className="row h-100 w-100 justify-content-center align-items-center">
                {options.map((option, counter) => (
                    <HomeOption content={language == 'en' ? option.en : option.es} key={counter} />
                ))}
            </div>
        </div>
    )
}

export default Home