import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <NavBar />
            {/*<ItemListContainer />*/}
            <ItemDetailContainer />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
