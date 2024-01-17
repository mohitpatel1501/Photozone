import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google photo" height="200" width="300"/>
   </>
  );
}

function Table(){
  return(
    <>
    <table border=" 1" cellSpacing="5" cellPadding="5" width="500" height="200">
      <tr><th>Sr No.</th><th>Name</th><th>Percentage</th><th>Result</th></tr>
      <tr><td>1</td><td>Mohit</td><td>93</td><td>PASS</td></tr>
      <tr><td>2</td><td>Jaimin</td><td>89</td><td>PASS</td></tr>
      <tr><td>3</td><td>Utsav</td><td>83</td><td>PASS</td></tr>
    </table>
    </>
  );
}

function Lists (){
  return(
    <>
      <h3>Ordered List</h3>
      <ol>
        <li> Ordered List 1</li>
        <li> Ordered List 2</li>
        <li> Ordered List 3</li>
      </ol>

      <h3>Unordered List</h3>
      <ul>
        <li> Unordered List 1</li>
        <li> Unordered List 2</li>
        <li> Unordered List 3</li>
      </ul>

      <h3>Mixed List</h3>
      <ol>
        <li>Progrmming Languages</li>
        <ul>
          <li>C</li>
          <li>Java</li>
        </ul>
        <li>Web Technologies</li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
        </ul>
      </ol>
    </>
  );
}
export default App;
export {Table, Lists};
