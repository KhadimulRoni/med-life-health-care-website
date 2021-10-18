import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Home/Doctors/Doctors';
import Home from './components/Home/Home/Home';
import ServiceDetails from './components/Home/SearviceDetails/ServiceDetails';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';
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
              <Route path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route path="/details/:serviceId">
                <ServiceDetails></ServiceDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
              <Footer></Footer>
        </Router>
        
    </div>
  );
}

export default App;
