import { useEffect, useState } from "react"


export const useAudio = ({ soundfile }) => {

    const [audio] = useState(new Audio(soundfile))
    const [isPause, setIsPause] = useState(true)

    const handleToggle = () => {
        setIsPause(!isPause)
    }

    useEffect(() => {
        isPause ? audio.pause() : audio.play()
    }, [isPause])

    useEffect(() => {
        audio.removeEventListener('ended', () => setIsPause(true))
        return () => audio.removeEventListener('ended', () => setIsPause(true))
    }, [])

    return [isPause, handleToggle]
}