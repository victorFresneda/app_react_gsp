import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10 })=> {

    //hooks

    const [counter, setCounter] = useState(0);

    //handleAdd

    const handleAdd = () => {
        setCounter( counter +1);
    }

    //handleless
     const handleless = () => {
        setCounter((counter -1 )); 
     }
    
    //Reset
    const reset = () => {
        setCounter((value )); 
     }




    return(
        <>
        <h1>CounterApp</h1>
        <p>{ counter }</p>

        <button onClick={handleAdd}>+1</button>
        <button onClick={handleless}>-1</button>
        <button onClick={reset}>Reset</button>
        </>
    );
}


export default CounterApp;




