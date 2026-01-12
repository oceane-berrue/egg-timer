import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

type StartPageProps = {
    setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>,
    soundEnabled: boolean
}

export default function StartPage({setSoundEnabled, soundEnabled}: StartPageProps) {
    const navigate = useNavigate()

    return (
    <>
        {soundEnabled===true && <button className="sound-btn" onClick={() => setSoundEnabled(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1200 1200"><path fill="#DB8464" d="M170.671 384.805h243.816l366.784-298.94v1028.27l-366.784-298.94H170.671zm748.41-48.764q108.128 108.126 110.248 262.898q0 148.407-110.248 254.417l-74.205-76.325q76.326-76.325 76.325-180.212q0-106.008-76.325-184.453z"/></svg>
        </button>}
        
        {soundEnabled===false && <button className="sound-btn" onClick={() => setSoundEnabled(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1200 1200"><path fill="#DB8464" d="M1089.041 681.359q2.578 2.576 2.578 6.073t-2.578 6.074l-57.062 57.063q-2.578 2.577-5.891 2.577q-2.944 0-6.258-2.577l-81.359-81.36l-81.359 81.36q-2.579 2.577-5.893 2.577q-2.945 0-6.258-2.577l-57.062-57.063q-2.21-2.21-2.209-6.259q-.002-3.68 2.209-5.89l81.359-81.36l-80.992-81.36q-2.577-2.21-2.576-5.89q-.001-4.05 2.576-6.259l56.693-57.063q2.578-2.577 6.26-2.577q3.68 0 5.891 2.577l81.359 81.36l81.359-81.36q2.579-2.577 6.074-2.577q3.497 0 6.074 2.577l57.062 57.063q2.578 2.577 2.578 6.074c0 3.497-.859 4.355-2.578 6.073l-81.357 81.362zm-980.66-296.554h243.817l366.784-298.94v1028.27l-366.783-298.94H108.381z"/></svg>
        </button>}


        <div className="startpage">
            <h1>Préparons <br />un oeuf !</h1>
            <Button
                name="Start"
                onClick={() => {
                    navigate('/menu')
                }}/>
        </div>
    </>
    )
}