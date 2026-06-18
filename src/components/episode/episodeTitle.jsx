import "../../css/episodeTitle.css"
const EpisodeTitle = ({ episode }) => {
    return (
        <div className="episode-title">
            <p className="episode-novel-title">{episode.novelTitle}</p>
            <h1 className="episode-viewer-title">
                {episode.title}
            </h1>
        </div>
    );
};

export { EpisodeTitle };