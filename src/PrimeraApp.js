
import React from 'react';
import PropTypes from 'prop-types';


const PruebaApp = ({ enviado, parrafo='Soy un parrafo del segundo prop' }) => {

    

    return (
        <>
        <h1> { enviado } </h1>
        <p> {parrafo} </p>
        </>
    );
}

PruebaApp.propTypes = {
    
    enviado: PropTypes.string.isRequired
}

PruebaApp.defaultProps = {
    parrafo: 'Parrafo desde default props'
}




export default PruebaApp;