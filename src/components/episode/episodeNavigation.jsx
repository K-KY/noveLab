import "../../css/episodeNavigation.css";

const EpisodeNavigation = ({ currentEpisode, hasPrev, hasNext }) => {
    return (
        <nav className="episode-navigation">
            <button
                className="episode-nav-button episode-nav-button-prev"
                type="button"
                disabled={!hasPrev}
            >
                ← 이전화
            </button>

            <span className="current-episode-label">
                제 {currentEpisode}화
            </span>

            <button
                className="episode-nav-button episode-nav-button-next"
                type="button"
                disabled={!hasNext}
            >
                다음화 →
            </button>
        </nav>
    );
};

export { EpisodeNavigation };