import {useNavigate} from "react-router-dom";
import {EpisodeTitle} from "./episodeTitle.jsx";
import {TranslateToggleButton} from "./TranslateToggleButton.jsx";
import "../../css/episodeTop.css"
const EpisodeTop = ({ episode, params, toggleSubtitle }) => {

    const navigate = useNavigate()
    function backPage() {
        navigate(`/novels/${params.novelId}`);
    }

    return (
        <section className="episode-top">
            <button className={"ep-back-button"} onClick={backPage} type="button">
                <span className={"ep-back-icon"}>‹</span>
                목록으로 돌아가기
            </button>
            <EpisodeTitle episode={episode} />
            <TranslateToggleButton toggleSubtitle={toggleSubtitle}/>
        </section>
    );
};

export { EpisodeTop };