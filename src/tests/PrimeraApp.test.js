import React from 'react';
import { shallow } from 'enzyme';
import PruebaApp from '../PrimeraApp';





describe('Pruebas en <PrimeraApp/>', () => {
    
    test('Debe mostrar <PrimeraApp/> correctamente ', () => {
    
        // const enviado = "Titulo enviado  desde los props";
        
        // const wrapper = render(<PruebaApp enviado={enviado}/>)

        const enviado = 'Titulo enviado desde los props'

        const wrapper = shallow( <PruebaApp  enviado={enviado}/>);

        expect( wrapper ).toMatchSnapshot();
    })
    
    
})
