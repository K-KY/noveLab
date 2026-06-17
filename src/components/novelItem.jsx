import '../css/novelItem.css'
import {NovelStateBar} from "./novelStateBar.jsx";
import {NovelInfo} from "./novelInfo.jsx";

const NovelItem = ({id, title, author, content, state, score, viewCount}) => {
    function onItemClick() {
        console.log(id);
    }
    return (
        <>
                <div onClick={onItemClick} className={'novel-item-container'}>
                    <div>
                        <NovelStateBar state={state}></NovelStateBar>
                    </div>

                    <NovelInfo title={title} content={content} author={author}></NovelInfo>

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