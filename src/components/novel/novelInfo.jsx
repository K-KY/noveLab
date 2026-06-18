import "../../css/novelInfo.css"

const NovelInfo = ({title, content, author}) => {
    return (
        <div className="novel-info-container">
            <h4>
                {title}
            </h4>
            <div className="novel-info-author">
                {author}
            </div>
            <div className="novel-info-content">
                {content}
            </div>
        </div>
    )
}

export { NovelInfo }