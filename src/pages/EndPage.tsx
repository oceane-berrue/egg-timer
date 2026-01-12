import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import oeufIcon from "../assets/oeuf-FIN.png"

export default function EndPage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="endpage">
                <img src={oeufIcon} alt="un oeuf qui sourit" />
                <p>Ton oeuf est prêt !</p>
                <div className="endpage-btns">
                    <Button name="Snooze" onClick={() => navigate("/timer")}/>
                    <Button name="Fermer" onClick={() => navigate("/")}/>
                </div>
            </div>
        </>
    )
}