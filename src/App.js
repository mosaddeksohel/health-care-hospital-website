import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Login/Login';
import Home from './Home/Home';
import Register from './Login/Register';
import About from './About/About';
import Product from './Service/Product';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Services2 from './Service/Services2';
import Doctor from './Doctor/Doctor';

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
            <PrivateRoute path="/product">
              <Product></Product>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/doctor">
              <Doctor></Doctor>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
