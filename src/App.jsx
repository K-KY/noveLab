import './App.css'
import { Header } from "./components/header.jsx";
import { Home } from "./components/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NovelDetail} from "./components/novel/novelDetail.jsx";
import {EpisodeViewer} from "./components/episode/episodeViewer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/novels/:novelId" element={<NovelDetail />} />
                <Route path="/novels/:novelId/:epId" element={<EpisodeViewer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;