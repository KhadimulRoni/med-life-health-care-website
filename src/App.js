import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Login from './components/Shared/Login/Login';

function App() {
  return (
    <div className="App">

        <Router>
              <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
                </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
          </Switch>
              <Footer></Footer>
        </Router>
        
    </div>
  );
}

export default App;
