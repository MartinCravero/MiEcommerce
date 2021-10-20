
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ItemListContainer stock='5'/>
      </body>
    </div>
  );
}

export default App;
