import { useNavigate } from "react-router-dom";
import molletIcon from "../assets/oeuf_mollet.png"
import auplatIcon from "../assets/oeuf_auplat.png"
import durIcon from "../assets/oeuf_dur.png"
import alacoqueIcon from "../assets/oeuf_alacoque.png"
import { MenuChoice } from "../components/MenuChoice";

type MenuProps = {
    setSelectedTime: React.Dispatch<React.SetStateAction<number>>,
    soundEnabled: boolean
}

export default function Menu({setSelectedTime, soundEnabled}: MenuProps) {
    const navigate = useNavigate()

    return (
        <div className="menupage">
            <p className="menu-title">Qu'est-ce que l'on fait aujourd'hui ?</p>

            <div className="menu-full">
                    <MenuChoice 
                        name="Oeuf Mollet"
                        icon={molletIcon}
                        imgAlt="un oeuf mollet"
                        onClick={() => {
                            setSelectedTime(360)
                            navigate('/timer')}
                        }
                        soundEnabled={soundEnabled}
                    />

                    <MenuChoice 
                        name="Oeuf au Plat"
                        icon={auplatIcon}
                        imgAlt="un oeuf au plat"
                        onClick={() => {
                            setSelectedTime(180)
                            navigate('/timer')}
                        }
                        soundEnabled={soundEnabled}
                    />
                
                    <MenuChoice 
                        name="Oeuf Dur"
                        icon={durIcon}
                        imgAlt="un oeuf dur"
                        onClick={() => {
                            setSelectedTime(600)
                            navigate('/timer')}
                        }
                        soundEnabled={soundEnabled}
                    />

                    <MenuChoice 
                        name={<>Oeuf à la <br/>Coque</>}
                        icon={alacoqueIcon}
                        imgAlt="un oeuf à la coque"
                        onClick={() => {
                            setSelectedTime(180)
                            navigate('/timer')}
                        }
                        soundEnabled={soundEnabled}
                    />
            </div>
            
            
        </div>
    )
}