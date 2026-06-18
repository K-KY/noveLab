import { SearchInput } from "./searchInput.jsx";
import "../css/searchBar.css";

const SearchBar = ({place}) =>  {
    return (
        <div className={"episode-search-bar"}>
            <svg
                className={"episode-search-icon"}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21 21L16.65 16.65M18.5 11C18.5 15.1421 15.1421 18.5 11 18.5C6.85786 18.5 3.5 15.1421 3.5 11C3.5 6.85786 6.85786 3.5 11 3.5C15.1421 3.5 18.5 6.85786 18.5 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <SearchInput className={"episode-search-input"}
                         place={place} />
        </div>
    );
};

export { SearchBar };