import { Next } from "./App";

export default function First() {
    return(
        <>
        <h1>This is First Component</h1>
        </>
    );
}

function Second() {
    return(
        <>
        <h2>This is Second Component</h2>
        </>
    );
}

function Third() {
    return(
        <>
        <h3>This is Third Component</h3>
        </>
    );
}

function Fourth() {
    return(
        <>
        <h4>This is Fourth Component</h4>
        </>
    );
}

function Fifth() {
    return(
        <>
        <h5>This is Fifth Component</h5>
        <Fourth />
        <Next />
        </>
    );
}

export {Second, Third, Fifth};