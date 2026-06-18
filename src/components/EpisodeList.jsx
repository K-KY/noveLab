import { EpisodeItem } from "./EpisodeItem.jsx";
import "../css/episodeList.css"
import {useNavigate} from "react-router-dom";
const EpisodeList = ({ episodes }) => {
    const navigate = useNavigate();
    function onItemClick(epId) {
        navigate(`${epId}`);
    }
    return (
        <div className={"episode-list"}>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} onItemClick={(epId) =>onItemClick(epId)} />
            ))}
        </div>
    );
};

export { EpisodeList };