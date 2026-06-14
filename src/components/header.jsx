import {HeaderIcon} from "./headerIcon.jsx";
import mainIcon from "../assets/mainIcon.png";
import '../css/header.css'

const Header = () => {
    const onHeaderClick = () => {
        console.log("onHeaderClick");
    }
    return (
        <>
            <div className={'header-container'}>
                <HeaderIcon image={mainIcon} alt={"메인 아이콘"}
                            onHeaderClick={() => onHeaderClick()} width={150}></HeaderIcon>
            </div>
        </>
    );
}

export {Header};