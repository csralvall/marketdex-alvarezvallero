import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Switch>
              <Route exact path='/' component={ItemListContainer} />
              <Route exact path='/category/:id'
                render={(props) => (
                  <ItemListContainer categoryId={props.match.params.id} />
                )}/>
              <Route exact path='/item/:itemId' component={ItemDetailContainer} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
