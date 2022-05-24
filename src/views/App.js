import logo from './logo.svg';
import './App.scss';
import NewMyComponent from '../components/NewMyComponent';
import ListToDo from './Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          {/* Hello World. This is React project of Minh Nhi */}
          Simple  To Do app with Minh Nhi &amp; TP HCM
        </p>
        {/* <NewMyComponent /> */}
        <ListToDo />

      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
