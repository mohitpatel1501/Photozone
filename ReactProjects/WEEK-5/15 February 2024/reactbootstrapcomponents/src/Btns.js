import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Loginbtn() {
    return (
        <Button variant="primary"> Login </Button>
    );
  }
function Logoutbtn() {
    return (
        <Button variant="danger"> Logout </Button>
    );
  }
function Addtocartbtn() {
    return (
        <Button variant="success"> Add to Cart </Button>
    );
  }
function Join() {
    return (
        <Button variant="warning"> Join </Button>
    );
  }
  
  export default Loginbtn;
  export {Logoutbtn, Addtocartbtn, Join};