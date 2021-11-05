
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
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
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
