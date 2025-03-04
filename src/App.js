import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Members from "./pages/members";
import Publications from "./pages/publications";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" exact component={Members} />
          <Route path="/education" exact component={Education} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/publications" exact component={Publications} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
