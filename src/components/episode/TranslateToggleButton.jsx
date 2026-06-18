import { useState } from "react";
import "../../css/translateToggleButton.css";

const TranslateToggleButton = () => {
    const [showTranslate, setShowTranslate] = useState(false);

    const handleClick = () => {
        setShowTranslate((prev) => !prev);
    };

    return (
        <button
            className="translate-toggle-button"
            type="button"
            onClick={handleClick}
        >
            {showTranslate ? (
                <svg
                    className="translate-toggle-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                    />


                    <path
                        d="M2 12C3.27 8.11 7 4 12 4C17 4 20.73 8.11 22 12C20.73 15.89 17 20 12 20C7 20 3.27 15.89 2 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg
                    className="translate-toggle-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 3L21 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <path
                        d="M9.88 4.24C10.56 4.08 11.27 4 12 4C17 4 20.73 8.11 22 12C21.63 13.14 20.96 14.37 20.03 15.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.61 6.61C4.39 7.98 2.93 10.14 2 12C3.27 15.89 7 20 12 20C13.47 20 14.82 19.64 16 19.03"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {showTranslate ? "원문 보기" : "번역 보기"}
        </button>
    );
};

export { TranslateToggleButton };