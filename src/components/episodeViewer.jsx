import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {EpisodeTop} from "./episodeTop.jsx";
import {EpisodeContentBox} from "./episodeContentBox.jsx";
import {EpisodeNavigation} from "./episodeNavigation.jsx";
import "../css/episodeViewer.css"

const dummyEpisode = {
    novelTitle: "Re:ゼロから始める異世界生活",
    episodeNumber: 1,
    title: "第一章１　『ギザ十は使えない』",
    content: [
        "――これは本気でマズイことになった。",
        "一文無しで途方に暮れながら、彼の心中はそんな一言で埋め尽くされていた。",
        "一文無しというのは正確ではない。財布はポケットの中に入っているし、",
        "やや小銭が多くてお札が少ない点を除けば全財力には違いない。",
        "地元から一番近いショッピングモールまで出て",
        "、本屋で買い物して昼飯を食べてくるぐらいの余裕は持てる懐具合。",
        "にも関わらず、一文無しと表現するしかない。",
        "なにせ、",
        "「やっぱ、貨幣価値とかって全然違うんだよな……」",
        "これといった特徴のない少年だ。",
        "短い黒髪に、高くも低くもない平均的な身長。",
        "体格は鍛えているのかやや筋肉質で、安物のグレーのジャージと相まってスポーツマン風ではある。",
    ],
};

const EpisodeViewer = () => {
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (!params.novelId ||  !params.novelId) {
            navigate("/")
        }
        console.log(params.novelId)
        console.log(params.episodeId)
    })
    return (
        <main className="episode-viewer">
            <div className="episode-viewer-inner">
                <EpisodeTop episode={dummyEpisode} params={params} />

                <EpisodeContentBox paragraphs={dummyEpisode.content} />

                <EpisodeNavigation
                    currentEpisode={dummyEpisode.episodeNumber}
                    hasPrev={true}
                    hasNext={true}
                />
            </div>
        </main>
    );
};

export { EpisodeViewer };