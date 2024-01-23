import './App.css';
import './Style.css';

function App() {
  return (
    <h1>This is react task for the CSS</h1>
  );
}

function Login(){
  return(
    <>
    <button style={{color : "white", fontSize: "20", backgroundColor : "red"}}>Login</button>
    <p />
    </>
  );
}

function Box(){
  return(
    <div className='mybox'>This is Box Function</div>
  );
}

const mystyle = {
  table : {
    border: "3px solid blue",
    textAlign: "center",
    fontSize : "20px",
  }, 
  
}
function Table(){
  return(
    <>
      <table style={mystyle.table}>
        <thead><tr><th>Sr No.</th><th>Name</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Mohit</td></tr>
          <tr><td>2</td><td>Jaimin</td></tr>
        </tbody>
      </table>
    </>
  );
}

function One(){
  return(
    <div className='one'>This is One Function</div>
  );
}

export default App;
export {Login, Box, Table, One};
