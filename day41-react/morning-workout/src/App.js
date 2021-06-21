import './main.css';

import Header from './Header.js'
import ProductList from "./ProductList";

function App() {
  return (
      <div id="page">

        <Header/>

        <div id="main">

          <nav className="filter">
            <label htmlFor="filter">Filter</label>
            <input type="text" name="filter" id="filter" placeholder="enter search term"/>
          </nav>

          <div className="content">
            <h1>Products</h1>
            <ProductList/>
          </div>

        </div>

        <footer>
          &copy; 2027 Aperture Laboratories
        </footer>

      </div>
  );
}

export default App;
