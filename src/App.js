import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import SearchEngine from "./components/SearchEngine";
import Show_content from "./components/Show_content";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<SearchEngine />} />
          <Route exact path="/show_content/:title" element={<Show_content />} />
        </Routes>
      </Router>
    </div>
    // <Show_content />
  );
};

export default App;
