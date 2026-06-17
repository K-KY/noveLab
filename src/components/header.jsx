import {HeaderIcon} from "./headerIcon.jsx";
import mainIcon from "../assets/mainIcon.png";
import '../css/header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const onHeaderClick = () => {
        navigate("/")
    };
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