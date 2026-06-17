import {NovelItem} from "./novelItem.jsx";import '../css/novelList.css'
import {useNavigate} from "react-router-dom";
const NovelList = () => {
    const navigate = useNavigate()
    const novels = [
        {
            id: 1,
            title: "Re:ゼロから始める異世界生活",
            author: "長月達平",
            content: "平凡な高校生が異世界に転移し、時間を巻き戻す絶望的な冒険を始める。",
            state: "연재중",
            score: 4.9,
            viewCount: 10,
        },
        {
            id: 2,
            title: "魔法使いの日常",
            author: "佐藤花子",
            content: "魔法学校で繰り広げられる魔法使いたちの日常的な物語です。",
            state: "연재중",
            score: 4.6,
            viewCount: 89,
        },
        {
            id: 3,
            title: "帝国の陰謀",
            author: "山田次郎",
            content: "広大な帝国内で繰り広げられる政治的な陰謀と対立を描いた作品です。",
            state: "완결",
            score: 4.9,
            viewCount: 234,
        },
        {
            id: 4,
            title: "妖精の恋",
            author: "鈴木美咲",
            content: "妖精と人間の間に生まれた禁断の愛の物語です。",
            state: "연재중",
            score: 4.7,
            viewCount: 142,
        },
        {
            id: 5,
            title: "探偵の謎解き",
            author: "小林翔太",
            content: "天才探偵が繰り広げるスリルのあるミステリー事件解決劇です。",
            state: "연재중",
            score: 4.5,
            viewCount: 67,
        },
        {
            id: 6,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 7,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 8,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 9,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 10,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 11,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
        {
            id: 12,
            title: "星間冒険譚",
            author: "渡辺健一",
            content: "宇宙探検隊が繰り広げるスリリングな銀河冒険記です。",
            state: "연재중",
            score: 4.8,
            viewCount: 178,
        },
    ];

    function onItemClick(itemId) {
        console.log(itemId);
        navigate("/novels/" + itemId);
    }
    return (
        <>
            <div className={"novel-list-container-1r3c"}>
                    {novels.map((novel, index) =>
                        (   <NovelItem onClick={(itemId) => onItemClick(itemId)}
                                       {...novel} key={novel.title+index}></NovelItem>)
                    )}
            </div>
        </>
    )
}

export {NovelList}