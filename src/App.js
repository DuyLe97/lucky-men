import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="columns">
        <div class="column">
          <textarea class="textName" placeholder="e.g. Name"></textarea>
          <textarea class="textEmail" placeholder="e.g. Email"></textarea>
          <button class="button is-primary">Button</button>
        </div>
    <div class="column">
      Second column
    </div>
    </div>
    </div>
  );
}

export default App;
