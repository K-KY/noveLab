import "../css/serchIput.css";

const SearchInput = ({place}) => {
    return (
        <input
            className="search-input"
            type="text"
            placeholder={place}
        />
    );
};

export { SearchInput };