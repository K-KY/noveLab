import {SearchBar} from "./searchBar.jsx";
import {NovelList} from "./novelList.jsx";
import "../css/home.css"
const Home = () => {
    return (
        <div>
            <section className="search-bar-section">
                <SearchBar></SearchBar>
            </section>
            <NovelList></NovelList>
        </div>
    )
}

export {Home}