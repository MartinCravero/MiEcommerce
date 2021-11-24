
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {CartProvider} from "./contexts/CartContexts"
import {Cart} from "./components/Cart/Cart"

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Switch> 
        <Route exact path='/' >
          <ItemListContainer/>
        </Route>
        <Route exact path='/category/:categoryItem' >
          <ItemListContainer/>
        </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
        </Switch>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
