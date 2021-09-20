import React from 'react';
import { shallow } from 'enzyme';
import PruebaApp from '../PrimeraApp';





describe('Pruebas en <PrimeraApp/>', () => {


    const wrapper = shallow( <PruebaApp />);
    
    test('Debe mostrar <PrimeraApp/> correctamente ', () => {
    
        // const enviado = "Titulo enviado  desde los props";
        
        // const wrapper = render(<PruebaApp enviado={enviado}/>)

        const enviado = 'Titulo enviado desde los props'

        const wrapper = shallow( <PruebaApp  enviado={enviado}/>);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar el parrafo enviado desde los props ', () => {
        
        const enviado = 'Titulo enviado desde los props';
        const parrafo = 'parrafo prueba';

        const wrapper = shallow( 
            <PruebaApp
                enviado={enviado}
                parrafo={parrafo}
            />);

        const textoParrafo = wrapper.find('p').text();
        

        expect( textoParrafo ).toBe( parrafo );

    });

    test('Debe de incrementar conel boton de +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');
        
    })
    

    
    
})
