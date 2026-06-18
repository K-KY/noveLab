import { EpisodeItem } from "./EpisodeItem.jsx";
import "../css/episodeList.css"
const EpisodeList = ({ episodes }) => {
    return (
        <div className={"episode-list"}>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

export { EpisodeList };