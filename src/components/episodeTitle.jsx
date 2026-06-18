import "../css/episodeTitle.css"
const EpisodeTitleBlock = ({ episode }) => {
    return (
        <div className="episode-title-block">
            <p className="episode-novel-title">{episode.novelTitle}</p>
            <h1 className="episode-viewer-title">
                {episode.title}
            </h1>
        </div>
    );
};

export { EpisodeTitleBlock };