import {Component} from 'react';

var a=25;
var b=5;

export default function Add(){
    let c=a+b;
    return c;
}

class Sub extends Component{
    render(){
        let c=a-b;
        return c;
    }
}

function Mul(){
    let c=a*b;
    return c;
}

class Div extends Component{
    render(){
        let c=a/b;
        return (
            <>
            <h1><span>Multiplication : </span><Mul /></h1>
            <h1><span>Division  : </span>{c}</h1>
            </>
        );
    }
}

export {Sub, Div};