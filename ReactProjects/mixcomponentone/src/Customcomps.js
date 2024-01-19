import {Next} from './App.js'
import { Component } from 'react';

export default function First(){
    return(
        <h1>This is First Component</h1>
    );
}

class Second extends Component{
    render(){
      return(
        <h2>This is second component</h2>
      );
    }
}

function Third(){
    return(
        <h3>This is third component</h3>
    );
}

class Fourth extends Component{
    render(){
      return(
        <h4>This is fourth component</h4>
      );
    }
}

class Fifth extends Component{
    render(){
      return(
        <>
        <p>This is fifth component</p>
        <Fourth />
        <Next />
        </>
      );
    }
}
export {Second, Third, Fifth};