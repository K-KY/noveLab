import "../../css/episodeContentBox.css"

const EpisodeContentBox = ({ paragraphs }) => {
    return (
        <article className="episode-content-box">
            {paragraphs.map((paragraph, index) => (
                <p className="episode-content-paragraph" key={index}>
                    {paragraph}
                </p>
            ))}
        </article>
    );
};

export { EpisodeContentBox };