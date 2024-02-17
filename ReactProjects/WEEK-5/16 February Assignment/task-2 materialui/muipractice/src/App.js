import logo from './logo.svg';
import './App.css';
import Containedbtn, { Errorbtn, Outlinedbtn, Successbtn } from './Btns';

function App() {
  return (
    <div className="App">
      <h1>React Material UI</h1>
    </div>
  );
}

function Buttons(){
  return(
    <>
    <Containedbtn />{' '}
    <Outlinedbtn />{' '}
    <Successbtn />{' '}
    <Errorbtn />{' '}
    </>
  );
}

export default App;
export {Buttons};
