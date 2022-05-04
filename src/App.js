import React from "react";
// import "./App.css";
// import Nav from "./Nav";
// import About from "./About";
// import Shop from "./Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </Router>
    </>
  );
}
const Home = () => {
  return (
    <>
      {console.log("test")}
      <h1>Homepage</h1>
    </>
  );
};
export default App;
