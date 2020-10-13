import React, { useState } from 'react'


const Sign = ({ content, handleClickSign, language }) => {

    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const { id, en, es, imageId, imageHoverId } = content

    return (
        <div className="col-xl-2 col-md-2 col-sm-4 m-4 item__sign text-center" onClick={() => handleClickSign(id)} onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)}>
            <img src={`http://drive.google.com/uc?export=view&id=${imageId}`} className={isMouseEnter? "d-none" : "d-block" } />
            <img src={`http://drive.google.com/uc?export=view&id=${imageHoverId}`} className={isMouseEnter? "d-block" : "d-none"} />
            <h3>{language === 'en'? en.name : es.name }</h3>
        </div>
    )
}

export default Sign