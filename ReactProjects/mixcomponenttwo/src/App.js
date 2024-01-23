import './App.css';
import Add, {Sub} from './Calc.js';
import {Component} from 'react';

function App() {
  return (
    <h1><span>Addition : </span><Add /></h1>
  );
}

class New extends Component{
  render(){
    return(
      <h1><span>Subtraction : </span><Sub /></h1>
    );
  }
}
export default App;
export {New};
