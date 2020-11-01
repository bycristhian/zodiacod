import React, { useEffect, useState } from 'react'
import CompatibilityRepository from '../data/CompatibilityRepository'
import useLanguage from '../hooks/useLanguage'

const Modal = ({ handleCloseModal, ownSign, partnerSign, language }) => {

    const [compatibility, setCompatibility] = useState({ pattern: "", en: { description: "" }, es: { description: "" } })

    useEffect(() => {
        let compatibilities = CompatibilityRepository.getCompatibilities()
        searchCompatibility(compatibilities)
    }, [])

    const searchCompatibility = (compatibilities) => {
        let combination1 = `${ownSign.id}-${partnerSign.id}`
        let combination2 = `${partnerSign.id}-${ownSign.id}`

        let compatibility = compatibilities.find(comp => comp.pattern === combination2 || comp.pattern === combination1)
        setCompatibility(compatibility)
    }


    return (
        <div className="position-absolute w-100 container__modal h-100">
            <div className="row align-items-center justify-content-center h-100 m-4">
                <div className="col-xl-6 bg-white p-4 text-center text-dark rounded shadow-lg">
                    <h3 className="m-3">{language === 'en' ? "¡This is the compatibility with your partner!" : "¡Está es la compatibilidad con tu pareja!"}</h3>

                    <div className="row justify-content-center m-3">
                        <div className="img__sign__modal align-items-center justify-content-center m-2">
                            <img src={`http://drive.google.com/uc?export=view&id=${ownSign.imageHoverId}`} />
                        </div>

                        <div className="img__sign__modal align-items-center justify-content-center m-2">
                            <img src={`http://drive.google.com/uc?export=view&id=${partnerSign.imageHoverId}`} />
                        </div>
                    </div>

                    <p className="compatibility__description mt-4 mb-4 p-3" dangerouslySetInnerHTML={{ __html: language === 'en' ? compatibility.en.description : compatibility.es.description }}></p>

                    <button className="btn btn-block btn-info mt-4" onClick={handleCloseModal}>{ language === 'es' ? "Cerrar" : "Close" }</button>
                </div>
            </div>
        </div>
    )
}

export default Modal