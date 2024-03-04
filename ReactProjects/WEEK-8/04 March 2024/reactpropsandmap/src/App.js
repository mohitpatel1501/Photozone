import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React props + map</h1>
    </div>
  );
}

// ************************************************************************************

var datamap = [{ "emp_name": "Ravi", "emp_tech": "Python", "emp_exp": "2 years" },
{ "emp_name": "Nayan", "emp_tech": "Flutter", "emp_exp": "3 years" }];

function Empdata() {
  return (
    <>
      {datamap.map(
        (a, i) => {
          return <Empdatamap name={datamap[i]["emp_name"]} tech={datamap[i]["emp_tech"]} exp={datamap[i]["emp_exp"]} />
        }
      )}
    </>
  );
}

function Empdatamap(props) {
  return (
    <h1>Name : {props.name} , Technology : {props.tech} , Experience : {props.exp}</h1>
  );
}

// ****************************************************************************************************

var students = [{ "name": "ravi", "physics": 75, "chemistry": 85, "maths": 100, "pic": "a.png" },
{ "name": "nayana", "physics": 55, "chemistry": 95, "maths": 80, "pic": "b.jpg" }];

function Studentsdata() {
  return (
    <>
    <table border={1}>
      <tr>
        <th>SR NO</th>
        <th>NAME</th>
        <th>PHYSICS</th>
        <th>CHEMISTRY</th>
        <th>MATHS</th>
        <th>IMAGE</th>
      </tr>
      {
        students.map(
          (a,i)=>{
            return <Studentsdatamap srno={i+1} name={students[i]["name"]} phy={students[i]["physics"]} chem={students[i]["chemistry"]} maths={students[i]["maths"]} img={students[i]["pic"]} />
          }
        )
      }
    </table>
    </>
  );
}

function Studentsdatamap(props) {
  return (
    <>
    <tr>
      <td>{props.srno}</td>
      <td>{props.name}</td>
      <td>{props.phy}</td>
      <td>{props.chem}</td>
      <td>{props.maths}</td>
      <td><img src={"images/"+props.img} height="50px" width="50px" /></td>
    </tr>
    </>
  );
}


export default App;
export { Empdata, Studentsdata };