import "../css/novelMeta.css"

const NovelMeta = ({novel}) => {
    return (
        <div className={"novel-meta-list"}>
            <NovelMetaItem label="평점" value={novel.score}/>
            <NovelMetaItem label="총 회수" value={novel.episodeCount}/>
            <NovelMetaItem label="상태" value={novel.state} highlight/>
        </div>
    );
};

const NovelMetaItem = ({label, value, highlight = false}) => {
    return (
        <div className={"novel-meta-item"}>
            <span className={"novel-meta-label"}>{label}</span>
            <span className={highlight ? "novel-meta-value highlight" : "novel-meta-value"}>
                {value}
            </span>
        </div>
    );
};

export {NovelMeta};