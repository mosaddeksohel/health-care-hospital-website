import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services2 from './components/Service/Services2';
import Appionment from './components/Booking/Appionment';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './components/Context/AuthProvider';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Doctor from './components/Doctor/Doctor/Doctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services2></Services2>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/doctor">
              <Doctor></Doctor>
            </Route>
            <PrivateRoute path="/appoinment/:appionmentId">
              <Appionment></Appionment>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
