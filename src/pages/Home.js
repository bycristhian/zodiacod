import React, { useEffect } from 'react'
import HomeOption from '../components/HomeOption'
import LanguageHeader from '../components/LanguageHeader'
import useLanguage from '../hooks/useLanguage'

import soundfile from '../audio/cosmos.mp3'
import '../styles/home.css'
import ReactAudioPlayer from 'react-audio-player'


const options = [
    {
        en: {
            title: 'What is my zodiac sign?',
            description: "If do you want to know which is the zodiac sign of a person and also know what is the usual behavior of her, this option is indicated.",
            link: "/my-sign/",
            image: "https://www.flaticon.com/svg/static/icons/svg/3570/3570682.svg"
        },
        es: {
            title: '¿Cúal es mi signo zodiacal?',
            description: "Si quieres saber cual es el signo zodiacal de una persona y además saber cual es el comportamiento habitual de ella, esta opción es la indicada.",
            link: "/my-sign/",
            image: "https://www.flaticon.com/svg/static/icons/svg/3570/3570682.svg"
        }
    },
    {
        en: {
            title: 'Compatibility between couples',
            description: "Discover the compatibility that you have with other persons",
            link: "/compatibility/",
            image: "https://www.flaticon.com/svg/static/icons/svg/2231/2231975.svg"
        },
        es: {
            title: 'Compatibilidad entre parejas',
            description: "Descubre la compatibilidad que tienes con otras personas de acuerdo a sus signos zodiacales.",
            link: "/compatibility/",
            image: "https://www.flaticon.com/svg/static/icons/svg/2231/2231975.svg"
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

            <br/><br/>
            <h1 className="text-white text-center">ZODIACOD</h1>

            <div className="row justify-content-center p-4 mt-4 align-items-stretch">
                {options.map((option, counter) => (
                    <HomeOption content={language === 'en' ? option.en : option.es} key={counter} language={language} />
                ))}
            </div>
        </div>
    )
}

export default Home