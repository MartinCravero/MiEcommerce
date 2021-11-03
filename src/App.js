
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer'
import { useState } from 'react';
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer'
// import { BrowserRouter, Switch, Route } from "react-route.dom"

function App() {
  const [flag, setFlag] = useState(true)
  const changeFlag = () => {
      setFlag(!flag)
  }

  const [id, setId] = useState(null)
  const setNewId = (i) => {
      setId(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
      {flag ?
                <ItemListContainer changeFlag={changeFlag} setNewId={setNewId}/> :
                <ItemDetailContainer changeFlag={changeFlag} id={id}/>
            }
      </body>
    </div>

    // <BrowserRouter>
    // <NavBar/>
    // // {/* <Switch> */}
    //   // <Route exact path="/" >
    //     <ItemListContainer/>
    //   // </Route>
    //   // <Route path="/details">

    //   // </Route>
    // // </Switch>
    // // </BrowserRouter>
  );
}

export default App;
