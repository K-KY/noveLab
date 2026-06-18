import "../../css/dictionaryPopup.css"
const DictionaryPopup = ({ visible, text, x, y, onClose }) => {
    if (!visible) {
        return null;
    }

    return (
        <div
            className="selection-dictionary-popup"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            <button
                className="selection-popup-close-button"
                type="button"
                onClick={onClose}
                aria-label="닫기"
            >
                ×
            </button>

            <section className="selection-popup-section">
                <p className="selection-popup-label">일본어 원문</p>
                <p className="selection-popup-main-text">{text}</p>
            </section>

            <section className="selection-popup-section">
                <p className="selection-popup-label">한국어 번역</p>
                <p className="selection-popup-main-text">
                    {getDummyMeaning(text)}
                </p>
            </section>

            <section className="selection-popup-section">
                <p className="selection-popup-label">의미</p>
                <p className="selection-popup-description">
                    여기에 어떤 의미인지 넣을거임
                </p>
            </section>

            <section className="selection-popup-section">
                <p className="selection-popup-label">발음</p>
                <p className="selection-popup-description">
                    여기에 어떻게 발음하는지 넣을거임 한국어로
                </p>
            </section>
        </div>
    );
};

const getDummyMeaning = (text) => {
    const sampleDictionary = {
        "一文無し": "무일푼",
        "財布": "지갑",
        "ポケット": "주머니",
        "全財力": "전 재산",
        "少年": "소년",
    };

    return sampleDictionary[text] ?? `${text} (아무튼 번역됨)`;
};

export { DictionaryPopup };