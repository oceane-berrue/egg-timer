import { type PropsWithChildren, type ReactNode } from "react"
import { playSound } from "../functions/playSound"
import popSound from "../assets/sounds/pop.mp3"

type Props = PropsWithChildren<{
    name?: string | ReactNode,
    onClick: () => void,
    icon: string,
    imgAlt: string,
    soundEnabled: boolean
}>

export function MenuChoice({name, onClick, icon, imgAlt, soundEnabled}: Props) {
    let volume

    if (soundEnabled === false) {
        volume = 0
    } else {
        volume = 0.2
    }

    return (
        <div className="menu-choice">
                <button className="menu-btn" onClick={onClick} onMouseEnter={() => playSound(popSound, volume)}>
                    <img src={icon} alt={imgAlt} />
                    <p>{name}</p>
                </button>
            </div>
    )
}