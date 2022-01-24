import logo from './kalanchoe.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer titleName="Productos en stock = 3"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ejercicio de crear una App en React js.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Para aprender React, click acá.
        </a>
      </header>
    </div>
  );
}

export default App;
