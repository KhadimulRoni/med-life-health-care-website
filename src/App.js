import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Home/Doctors/Doctors';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Registration from './components/Home/Registration/Registration';
import SingleServiceDetails from './components/Home/SearviceDetails/SingleServiceDetails';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/Shared/About/About';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">

        <AuthProvider>
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
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/details/:serviceId">
                  <SingleServiceDetails></SingleServiceDetails>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/registration">
                  <Registration></Registration>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
                <Footer></Footer>
          </Router>
        </AuthProvider>
        
    </div>
  );
}

export default App;
