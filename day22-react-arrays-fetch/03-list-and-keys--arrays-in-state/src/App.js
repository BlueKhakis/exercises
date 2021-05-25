import logo from './logo.svg';
import './App.css';
import RandomComponent from './components/RandomComponent';
import List from './components/List';
import ListWithArrayState from './components/ListWithArrayState';

function App() {
  return (
    <div className="App">
      <ListWithArrayState />
    </div>
  );
}

export default App;
