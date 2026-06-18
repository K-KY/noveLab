import "../../css/novelDetail.css";
import { NovelDetailHeader } from "./novelDetailHeader.jsx";
import { NovelMeta } from "./NovelMeta.jsx";
import { EpisodeSearchBar } from "../episode/EpisodeSearchBar.jsx";
import { EpisodeList } from "../episode/EpisodeList.jsx";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const dummyNovel = {
    title: "Re:ゼロから始める異世界生活",
    author: "長月達平",
    description: "平凡な高校生が異世界に転移し、時間を巻き戻す絶望的な冒険を始める。",
    score: 4.9,
    episodeCount: 11,
    state: "연재중",
};



const dummyEpisodes = [
    {
        id: 0,
        title: "プロローグ『始まりの余熱』",
        date: "2012.04.20",
        estimatedTime: "약 12 분",
        episodeNumber: 0,
    },
    {
        id: 1,
        title: "第一章１『ギザ十は使えない』",
        date: "2012.04.20",
        estimatedTime: "약 10 분",
        episodeNumber: 1,
    },
    {
        id: 2,
        title: "第一章２『調子に乗るな、と神は言った』",
        date: "2012.04.20",
        estimatedTime: "약 11 분",
        episodeNumber: 2,
    },
    {
        id: 3,
        title: "第一章３『はじめてのまほう』",
        date: "2012.04.20",
        estimatedTime: "약 9 분",
        episodeNumber: 3,
    },
    {
        id: 4,
        title: "第一章４『膝枕の恩返し』",
        date: "2012.04.21",
        estimatedTime: "약 10 분",
        episodeNumber: 4,
    },
    {
        id: 5,
        title: "第一章５『君の名前は』",
        date: "2012.04.21",
        estimatedTime: "약 10 분",
        episodeNumber: 5,
    },
    {
        id: 6,
        title: "第一章６『始まりの終わり』",
        date: "2012.04.22",
        estimatedTime: "약 11 분",
        episodeNumber: 6,
    },
    {
        id: 7,
        title: "第一章７『不可解な再会』",
        date: "2012.04.22",
        estimatedTime: "약 12 분",
        episodeNumber: 7,
    },
    {
        id: 8,
        title: "第一章８『苦い酒の味』",
        date: "2012.04.23",
        estimatedTime: "약 10 분",
        episodeNumber: 8,
    },
    {
        id: 9,
        title: "第一章９『切り札の切り方』",
        date: "2012.04.24",
        estimatedTime: "약 11 분",
        episodeNumber: 9,
    },
    {
        id: 10,
        title: "第一章１０『失言の代償』",
        date: "2012.04.25",
        estimatedTime: "약 10 분",
        episodeNumber: 10,
    },
];

const NovelDetail = () => {
    const param = useParams()
    useEffect(() => {
        console.log("set Novels", param.novelId)
    }, [param.novelId]);

    return (
        <div className={"novel-detail-page"}>
            <div className={"novel-detail-inner"}>
                <NovelDetailHeader novel={dummyNovel} />
                <NovelMeta novel={dummyNovel} />
                <EpisodeSearchBar place={"화수나 제목으로 검색하세요"} />

                <section className={"nd-episode-section"}>
                    <h2 className={"nd-episode-section-title"}>
                        전체 회차 &#40; {dummyEpisodes.length} &#41;
                    </h2>

                    <EpisodeList episodes={dummyEpisodes} />
                </section>
            </div>
        </div>
    );
};

export { NovelDetail };