const NovelMeta = ({ novel }) => {
    return (
        <div>
            <NovelMetaItem label="평점" value={novel.score} />
            <NovelMetaItem label="총 회수" value={novel.episodeCount} />
            <NovelMetaItem label="상태" value={novel.state} highlight />
        </div>
    );
};

const NovelMetaItem = ({ label, value, highlight = false }) => {
    return (
        <div>
            <span>{label}</span>
            <span>
                {value}
            </span>
        </div>
    );
};

export { NovelMeta };