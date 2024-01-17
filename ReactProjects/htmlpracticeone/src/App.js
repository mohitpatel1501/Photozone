import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <h3>Heading H3</h3>
      <h4>Heading H4</h4>
      <h5>Heading H5</h5>
      <h6>Heading H6</h6>
      <p>This is paragraph tag</p>
    </>
  );
}

function Text() {
  return (
    <>
      <b>This is Bold text</b><br/>
      <i>This is Italic text</i><br/>
      <u>This is Underline text</u><br/>
    </>
  );
}

function One() {
  return (
    <>
      <h3>H<sub>2</sub>O</h3>
      <h3>N<sup>2</sup></h3>
    </>
  );
}

function Two() {
  return (
    <>
      Sale Price : <ins> 500 </ins> <i><del> 1000 </del></i> (50% off)
    </>
  );
}

export default App;
export {Text, One, Two};