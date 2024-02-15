import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Warningmsg() {
    return (
        <Button variant="warning" onClick={function () { alertify.confirm('Warning', 'Are you sure ?', function () { alertify.success('Ok'); }); }} > View Warning msg </Button>
    );
}
function Infomsg() {
    return (
        <Button variant="info" onClick={function () { alertify.alert('Info Message'); }} > View Info msg </Button>
    );
}
function Successmsg() {
    return (
        <Button variant="success" onClick={function () { alertify.success('success'); }} > View success msg </Button>
    );
}
function Secondarymsg() {
    return (
        <Successmsg />
    );
}

export default Warningmsg;
export { Infomsg, Secondarymsg };
