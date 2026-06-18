import {SearchBar} from "./searchBar.jsx";
import {NovelList} from "./novel/novelList.jsx";
import "../css/home.css"
const Home = () => {
    return (
        <div>
            <section className="search-bar-section">
                <SearchBar place={"제목으로 소설을 검색하세요"}></SearchBar>
            </section>
            <NovelList></NovelList>
        </div>
    )
}

export {Home}