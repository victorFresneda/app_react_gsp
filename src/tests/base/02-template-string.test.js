import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', () => {
    
    test('Prueba en el metodo getSaludo', () => {

        const nombre = ' Carlos';

        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe( 'Hola' + nombre + '!' );
        
    })
    
})
