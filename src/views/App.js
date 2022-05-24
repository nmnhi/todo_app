import logo from './logo.svg';
import './App.scss';
import NewMyComponent from '../components/NewMyComponent';


// 2 component: class component / function component(function, arrow)
// JSX

function App() {
  // Arrow function
// const App() = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World. This is React project of Minh Nhi
        </p>       
        <NewMyComponent/>

      </header>
    </div>
  );
}

export default App;
