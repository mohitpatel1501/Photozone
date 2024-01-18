
import './App.css';
import { Second, Third } from './Customcomps';

function App() {
  return (
    <>
      <h1>This is App Component</h1>
      <Second />
    </>
  );
}

function New() {
  return (
    <>
      <h1>This is New Component</h1>
      <Third />
    </>
  );
}

function Next(){
  return(
    <p>This is Next Component</p>
  );
}

export default App;
export {New, Next};
