import Alert from '@mui/material/Alert';

function Alertmsg(){
    return(
        <Alert variant="filled" severity="info" onClose={() => {}}>This is a filled info Alert.</Alert>
    );
}
function Warningalert(){
    return(
        <Alert severity="warning" onClose={() => {}}>This is a warning Alert.</Alert>
    );
}
function Erroralert(){
    return(
        <Alert severity="error" onClose={() => {}}>This is an error Alert.</Alert>
    );
}

export default Alertmsg;
export {Warningalert, Erroralert};