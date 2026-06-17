const NovelDetailHeader = ({ novel }) => {
    return (
        <section>
            <button type="button">
                <span>‹</span>
                목록으로 돌아가기
            </button>

            <div>
                <h1>{novel.title}</h1>
                <p>{novel.author}</p>
                <p>{novel.description}</p>
            </div>
        </section>
    );
};

export { NovelDetailHeader };