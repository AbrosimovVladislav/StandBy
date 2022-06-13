import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./components/MainPage";
import CompetitionResults from "./components/CompetitionResults";
import Footer from "./components/Footer";
import Competitions from "./components/Competitions";

function App() {
  return (
      <div className="content">
        <Header/>
        <div className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} exact/>
            <Route path="/competitions"
                   element={<Competitions/>} exact/>
            <Route path="/competition/results/:id"
                   element={<CompetitionResults/>} exact/>
          </Routes>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
