
import React from 'react';
import PropTypes from 'prop-types';


const PruebaApp = ({ enviado="Titulo enviado desde los props", parrafo }) => {

    

    return (
        <>
        <h1>{ enviado }!!!</h1>
        <p>{parrafo}</p>
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