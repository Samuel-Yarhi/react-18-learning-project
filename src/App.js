import logo from './logo.svg';
import './App.css';
import './components/Greet'
import { Greet } from './components/Greet';

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce'/>
       <ul>I am a child in a list
        <li>I am a child of a child c:</li>
        <li>I am a child of a child again</li>
       </ul>
      <Greet name='Clark' lastName = 'Kent'/>
      <Greet name='Mary'/>
        <p>I am a child in a p</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello world
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
