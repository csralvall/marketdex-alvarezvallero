import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemList } from './components/ItemListContainer/ItemListContainer';

function App() {
  const products = [
    {
      title: "Raqueta",
      price: "50",
      description: "No es la de Federer",
    },
    {
      title: "Pelota",
      price: "5",
      description: "Esta pinchada",
    },
    {
      title: "Vincha",
      price: "345",
      description: "Pero si sos pelado",
    },
    {
      title: "Remera",
      price: "45",
      description: "Se la olvido un cliente en el cambiador",
    },
    {
      title: "Shorts",
      price: "55",
      description: "Los hizo la vecina a crochet",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemList products={products} />
      <ItemList products={products} />
    </div>
  );
}

export default App;
