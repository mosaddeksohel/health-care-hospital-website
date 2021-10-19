import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Banner/Banner';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="home">
            <Banner></Banner>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
