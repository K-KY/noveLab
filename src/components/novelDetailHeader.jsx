import {useNavigate} from "react-router-dom";
import "../css/novelDetailHeader.css"
const NovelDetailHeader = ({ novel }) => {
    const navigate = useNavigate()
    function backPage() {
        navigate('/')
    }
    return (
        <section className={`novel-detail-header`}>
            <button className={"ndh-back-button"} onClick={backPage} type="button">
                <span className={"ndh-back-icon"}>‹</span>
                목록으로 돌아가기
            </button>

            <div className={"ndh-title-area"}>
                <h1 className={"ndh-title"}>{novel.title}</h1>
                <p className={"ndh-author"}>{novel.author}</p>
                <p className={"ndh-description"}>{novel.description}</p>
            </div>
        </section>
    );
};

export { NovelDetailHeader };