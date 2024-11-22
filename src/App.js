import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container"></div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
