import closeIcon from '../assets/close_button.png';
import shrinkIcon from '../assets/shrink_button.png';

type HeaderProps = {
    closeApp: () => void,
    minimizeApp: () => void
}

export function Header({closeApp, minimizeApp}: HeaderProps) {

    return (
        <header>
            <h2>{'Egg Timer <3'}</h2>
            <div className="header-btn">
                <button className='icon-btn' onClick={minimizeApp}>
                    <img src={shrinkIcon} alt="minimize window button"/>
                </button>
                <button className='icon-btn' onClick={closeApp}>
                    <img src={closeIcon} alt="close button" />
                </button>
            </div>
        </header>
    );
}
