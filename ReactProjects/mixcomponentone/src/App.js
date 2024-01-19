import './App.css';
import {Component} from 'react';
import { Third } from './Customcomps';
import { Second } from './Customcomps';

function App() {
  return (
    <>
    <h1>This is App Component</h1>
    <Second />
    </>
  );
}

class New extends Component{
  render(){
    return(
      <>
      <h2>This is New Component</h2>
      <Third />
      </>
    );
  }
}

function Next() {
  return (
    <h4>This is Next Component</h4>
  );
}

export default App;
export {New, Next};
