const NovelItem = ({id, title, author, content, state, score, viewCount}) => {
    return (
        <>
            <div>
                <div>
                    {state}
                </div>
                <h4>{title}</h4>
                <p>{content}</p>
                <p>{author}</p>
                <div>
                    <p>
                    score: {score}
                    </p>
                    <p>{viewCount}</p>
                </div>
            </div>
        </>
    )
}

export {NovelItem}