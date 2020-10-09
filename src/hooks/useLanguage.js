import { useEffect, useState } from "react"


const useLanguage = () => {

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')

    useEffect(() => {
        localStorage.setItem('language', language)
    })

    return [language, setLanguage]
}

export default useLanguage