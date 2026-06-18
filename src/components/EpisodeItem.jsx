import "../css/episodeItem.css"

const EpisodeItem = ({ episode }) => {
    return (
        <div  className="episode-item">
            <div className={"episode-main"}>
                <h3 className={"episode-title"} >{episode.title}</h3>

                <div className={"episode-sub-info"}>
                    <span>{episode.date}</span>
                    <span>{episode.estimatedTime}</span>
                </div>
            </div>

            <div className={"episode-number"}>
                제&nbsp; {episode.episodeNumber} &nbsp;화
            </div>
        </div>
    );
};

export { EpisodeItem };