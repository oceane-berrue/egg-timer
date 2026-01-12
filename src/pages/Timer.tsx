import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import oeufTimer from "../assets/oeuf_timer.gif"
import { Button } from "../components/Button";
import endSound from "../assets/sounds/A bike bells.m4a"
import { playSound } from "../functions/playSound";

type TimerProps = {
    selectedTime: number,
    soundEnabled: boolean
}

export default function Timer({selectedTime, soundEnabled}: TimerProps) {
    const navigate = useNavigate()
    const [timer, setTimer] = useState(selectedTime)

    const formatTime = (time: number): string => {
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2,'0')
        const seconds = String(time % 60).padStart(2, '0')

        return `${minutes}:${seconds}`
    }

    let volume

    if (soundEnabled === false) {
        volume = 0
    } else {
        volume = 0.2
    }

    useEffect(() => {
        const t = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(t)
                    playSound(endSound, volume)
                    navigate('/endpage')
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(t)
    })

    return (
        <div className="timerpage">
            <p>Ton oeuf est prêt dans...</p>
            <img src={oeufTimer} alt="un oeuf qui s'ouvre et se ferme" />
            <div className="timer">{formatTime(timer)}</div>
            <Button 
                name="Retour"
                onClick={() => {
                    navigate('/')
                }}
            />
        </div>
    )
}