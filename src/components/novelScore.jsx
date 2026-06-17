import "../css/novelScore.css";
const NovelScore = ({ score, viewCount }) => {
    return (
        <div className="novel-score-container">
            <div className="novel-score-item">
                <svg
                    className="novel-score-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2.5L14.95 8.48L21.55 9.44L16.78 14.09L17.9 20.67L12 17.57L6.1 20.67L7.22 14.09L2.45 9.44L9.05 8.48L12 2.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>

                <span>{score}</span>
            </div>

            <div className="novel-score-item">
                <svg
                    className="novel-score-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 2L4 14H11L9.5 22L20 9H13L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>

                <span>{viewCount} 화</span>
            </div>
        </div>
    );
};

export { NovelScore };