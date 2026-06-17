const EpisodeItem = ({ episode }) => {
    return (
        <div>
            <div>
                <h3 >{episode.title}</h3>

                <div>
                    <span>{episode.date}</span>
                    <span>{episode.estimatedTime}</span>
                </div>
            </div>

            <div>
                제&nbsp; {episode.episodeNumber} &nbsp;화
            </div>
        </div>
    );
};

export { EpisodeItem };