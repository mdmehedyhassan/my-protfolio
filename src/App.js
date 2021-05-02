import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="container main-app-container">
      <Router>
        <Header></Header>
        <div >
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
