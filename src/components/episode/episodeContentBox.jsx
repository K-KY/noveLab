import "../../css/episodeContentBox.css"
const EpisodeContentBox = ({ paragraphs, subtitle }) => {

const EpisodeContentBox = ({ paragraphs }) => {
    return (
        <article className="episode-content-box">
            {paragraphs.map((paragraph, index) => (
                <div className="episode-content-block" key={index}>
                    <p className="episode-content-paragraph">
                        {paragraph.origin}
                    </p>

                    {subtitle && (
                        <p className="episode-content-paragraph episode-content-subtitle">
                            {paragraph.ko}
                        </p>
                    )}
                </div>
            ))}
        </article>
    );
};

export { EpisodeContentBox };