import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Main/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

        <Router>
          <Switch>
            <Route>
              <Link exact path="/">
                <Home></Home>
              </Link>
              <Link path="/home">
                <Home></Home>
              </Link>
              <Link path="/header">
                <Header></Header>
              </Link>
              <Link path="/footer">
                <Footer></Footer>
              </Link>
            </Route>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
