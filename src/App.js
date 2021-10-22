
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ItemListContainer/>
      </body>
    </div>
  );
}

export default App;
