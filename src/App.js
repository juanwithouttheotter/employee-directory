import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/employee-directory" component={Home} />
          <Route exact path="/home" component={Home} />  
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
