// import logo from './logo.svg';
import './App.css';
import './components/Greet'
import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

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
      <Message/>
      <ClickHandler/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheet/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
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
