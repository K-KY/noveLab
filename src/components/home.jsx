import {SearchBar} from "./searchBar.jsx";
import {NovelList} from "./novelList.jsx";

const Home = () => {
    return (
        <div className="container">
            <SearchBar></SearchBar>
            <NovelList></NovelList>
        </div>
    )
}

export  {Home}