import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import CompetitionResults from "./components/CompetitionResults";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="content">
        <Header/>
        <div className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} exact/>
            <Route path="/competition/results/:id"
                   element={<CompetitionResults/>} exact/>
          </Routes>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
