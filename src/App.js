import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:id'
              render={(props) => (
                <ItemListContainer
                  extraPath={`category/${props.match.params.id}`}
                />
            )}/>
            <Route exact path='/item/:itemId' component={ItemDetailContainer} />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
