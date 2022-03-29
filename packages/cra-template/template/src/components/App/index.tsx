import c from './index.module.less';
import logo from './logo.svg';

console.log(c);
function App() {
  return (
    <div className={`App ${c.app}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {Math.random()}
        </p>
        <p>&#xe642;</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1212
        </a>
      </header>
    </div>
  );
}

export default App;
