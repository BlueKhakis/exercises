import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App() {
  return (
    <> {/* React fragment, sort of an "empty element" for React to digest,
        but not put on the page - serves as a workaround for "one element
        per return" rule of React */}
      <Hello name="Universe" />
      {/* It is a component, therefore it is reusable */}
      <Hello name="all the other Universes" />
      {/* Component is a function, so we can call it like one, as well.
        That being said, just because we CAN, doesn't mean we SHOULD.
        In fact, if you want your future colleagues to like and respect you,
        just DON'T... EVER! 
      */}
      {Hello({name:"TERRIBLE person calling functional components with plain JS syntax"})}
    </>
  );
}

export default App;
