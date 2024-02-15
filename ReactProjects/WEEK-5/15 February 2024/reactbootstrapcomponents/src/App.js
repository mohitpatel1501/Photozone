import Loginbtn, {Logoutbtn, Addtocartbtn, Join} from './Btns';
import './App.css';
import Warningmsg, { Infomsg, Secondarymsg } from './Msgs';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}

function All(){
  return(
    <>
    <Loginbtn /> {' '}
    <Logoutbtn />{' '}
    <Addtocartbtn />{' '}
    <Join />
    </>
  );
}

function Mix(){
  return(
    <>
    <Warningmsg />{' '}
    <Infomsg />{' '}
    <Secondarymsg />
    </>
  );
}
export default App;
export {All, Mix};
