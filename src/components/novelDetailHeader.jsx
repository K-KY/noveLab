import {useNavigate} from "react-router-dom";

const NovelDetailHeader = ({ novel }) => {
    const navigate = useNavigate()
    function backPage() {
        navigate('/')
    }
    return (
        <section>
            <button onClick={backPage} type="button">
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