import "../../css/episodeContentBox.css"
import { useState } from "react";
import {DictionaryPopup} from "./dictionaryPopup.jsx";

const EpisodeContentBox = ({ paragraphs, subtitle }) => {
    const [popup, setPopup] = useState({
        visible: false,
        text: "",
        x: 0,
        y: 0,
    });

    const handleMouseUp = () => {
        const selection = window.getSelection();//사용자가 드래그한 위치 객체
        const selectedText = selection?.toString().trim();//드래그한 단어

        if (!selectedText) {
            setPopup((prev) => ({
                ...prev,
                visible: false,
            }));
            return;
        }

        const range = selection.getRangeAt(0);//드래그 된 덩어리들 배열, 일반적으로 하나임
        const rect = range.getBoundingClientRect();//드래그 한 텍스트 모양이 화면에서 차지하는 크기

        setPopup({
            visible: true,
            text: selectedText,
            x: rect.left + window.scrollX,
            y: rect.bottom + window.scrollY + 8,
        });
    };

    const handleClosePopup = () => {
        setPopup((prev) => ({
            ...prev,
            visible: false,
        }));

        window.getSelection()?.removeAllRanges();
    };

    return (
        <article
            className="episode-content-box"
            onMouseUp={handleMouseUp}
        >
            {paragraphs.map((paragraph, index) => (
                <div className="episode-content-block" key={index}>
                    <p className="episode-content-paragraph">
                        {paragraph.origin}
                    </p>

                    {subtitle && (
                        <p className="episode-content-paragraph episode-content-subtitle">
                            {paragraph.ko}
                        </p>
                    )}
                </div>
            ))}

            <DictionaryPopup
                visible={popup.visible}
                text={popup.text}
                x={popup.x}
                y={popup.y}
                onClose={handleClosePopup}
            />
        </article>
    );
};

export { EpisodeContentBox };