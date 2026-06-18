import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {EpisodeTop} from "./episodeTop.jsx";
import {EpisodeContentBox} from "./episodeContentBox.jsx";
import {EpisodeNavigation} from "./episodeNavigation.jsx";
import "../../css/episodeViewer.css"

const dummyEpisode = {
    novelTitle: "Re:ゼロから始める異世界生活",
    episodeNumber: 1,
    title: "第一章１　『ギザ十は使えない』",
    content: [
        {
            origin:"――これは本気でマズイことになった。",
            ko:"――이건 진심으로 큰일 나버렸다."

        },
        {
            origin:"一文無しで途方に暮れながら、彼の心中はそんな一言で埋め尽くされていた。",
            ko:"한 푼도 없는 처지에 망연자실한 채, 그의 머릿속은 그런 한마디로 가득 차 있었다."

        },
        {
            origin:"一文無しというのは正確ではない。財布はポケットの中に入っているし、",
            ko:"무일푼이라는 표현은 정확하지 않았다.지갑은 주머니 안에 들어 있었고,"

        },
        {
            origin:"やや小銭が多くてお札が少ない点を除けば全財力には違いない。",
            ko:"동전이 좀 많고 지폐가 적다는 점만 빼면 전재산이 틀림 없다"

        },
        {
            origin:"地元から一番近いショッピングモールまで出て",
            ko:"집 근처에서 가장 가까운 쇼핑몰에 가서 "

        },
        {
            origin:"、本屋で買い物して昼飯を食べてくるぐらいの余裕は持てる懐具合。",
            ko:"서점에서 책을 사고 점심까지 먹고 올 정도의 여유는 있는 형편이었다."

        },
        {
            origin:"にも関わらず、一文無しと表現するしかない。",
            ko:"그럼에도 불구하고 무일푼이라고 표현할 수 밖에 없었다."

        },
        {
            origin:"なにせ、",
            ko:"왜냐하면"

        },
        {
            origin:"「やっぱ、貨幣価値とかって全然違うんだよな……」",
            ko:"「역시 화폐 가치 같은 게 완전히 다르구나……」"

        },
        {
            origin:"これといった特徴のない少年だ。",
            ko:"딱히 특징이라고 할 만한 게 없는 소년이다."

        },
        {
            origin:"短い黒髪に、高くも低くもない平均的な身長。",
            ko:"짧은 검은 머리에, 크지도 작지도 않은 평균적인 키."

        },
        {
            origin:"体格は鍛えているのかやや筋肉質で、安物のグレーのジャージと相まってスポーツマン風ではある。",
            ko:"몸은 단련했는지 약간 근육질이었고, 싸구려 회색 운동복과 어우러져 운동선수 같은 분위기를 풍기고 있었다."

        }
    ],
};

const EpisodeViewer = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [subtitle, setSubtitle] = useState(false)
    useEffect(() => {
        if (!params.novelId ||  !params.novelId) {
            navigate("/")
        }
        console.log(params.novelId)
        console.log(params.episodeId)
    })

    function toggleSubtitle(sub) {
        setSubtitle(!sub)
    }

    return (
        <main className="episode-viewer">
            <div className="episode-viewer-inner">
                <EpisodeTop episode={dummyEpisode} params={params} toggleSubtitle={() => toggleSubtitle(subtitle)} />

                <EpisodeContentBox paragraphs={dummyEpisode.content} subtitle={subtitle} />

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