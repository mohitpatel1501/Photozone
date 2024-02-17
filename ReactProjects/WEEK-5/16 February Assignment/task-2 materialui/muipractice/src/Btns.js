import {Button} from '@mui/material';

function Containedbtn(){
    return(
        <Button variant="contained"> Contained </Button>
    );
}
function Outlinedbtn(){
    return(
        <Button variant="outlined"> Outlined </Button>
    );
}
function Successbtn(){
    return(
        <Button variant="contained" color="success"> Success </Button>
    );
}
function Errorbtn(){
    return(
        <Button variant="outlined" color="error"> Error </Button>
    );
}

export default Containedbtn;
export {Outlinedbtn, Successbtn, Errorbtn};