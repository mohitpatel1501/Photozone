import './App.css';
import HTML from './assets/HTML.png';
import CSS from './assets/CSS.png';
import JS from './assets/JavaScript.png';
import NodeJS from './assets/NodeJS.png';
import ReactJS from './assets/ReactJS.png';
import BS5 from './assets/bootstrap5.png';

function App() {
  return (
    <div className='App'>
      <h1>This is HTML Practice Three</h1>
    </div>
  );
}

function First(){
  return(
    <>
      <h2>This is First Component</h2>
      <img src={HTML} alt="HTML LOGO" height="150" width="150" border="1"></img>
    </>
  );
}

function Second(){
  return(
    <>
      <h3>Web Developement</h3>
      <marquee behavior="scroll" width="50%" direction="left" height="180px" scrollamount="10">
      <img src={HTML} alt=" " height="150" width="150"></img>
      <img src={CSS} alt=" "  height="150" width="150"></img>
      <img src={JS}  alt=" " height="150" width="150"></img>
      <img src={NodeJS}  alt=" " height="150" width="150"></img>
      <img src={ReactJS} alt=" "  height="150" width="150"></img>
      <img src={BS5} alt=" "  height="150" width="150"></img>
      </marquee> <br />
    </>
  );
}

function YouTube(){
  return(
    <>
    <h3>YouTube iframe</h3>
    <iframe width="400" height="300" src="https://www.youtube.com/embed/wncNcu6jEgs?si=xnrJiVYR8fbX7Vft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </>
  );
}

function Map(){
  return(
    <>
      <h3>Map iframe</h3>
      <iframe title="Map iframe" style={{height:"30%" , width:"30%" , border:"1"}} frameborder="1" src="https://www.google.com/maps/embed/v1/place?q=Palanpur,+Gujarat,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    </>
  );
}
export default App;
export {First, Second, YouTube, Map};
