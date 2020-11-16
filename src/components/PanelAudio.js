
import React from 'react'

import soundfile from '../audio/cosmos.mp3'
import imagePause from '../img/pause.png'
import imagePlay from '../img/play.png'

import '../styles/panel.css'
import { useAudio } from '../hooks/useAudio'

export const PanelAudio = ({ children }) => {

    const [isPause, handleToggle] = useAudio({ soundfile: soundfile })

    return(
        <>
            { children }

            { window.location.pathname === '/zodiacod/' || window.location.pathname === '/zodiacod' ?
                <div className="panel__audio position-absolute pl-2 text-white">
                    Music <button onClick={handleToggle}>
                        <img src={isPause ? imagePlay : imagePause} height="18" width="18" />
                    </button>
                </div>
            : null }    
        </>
    )
}