
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../../EjercicioUno';

describe('Pruebas para <EjercicioUno/>', () => {


    let wrapper = shallow( <CounterApp  />);

    beforeEach( () => {

        wrapper = shallow( <CounterApp  />);

    })

    

    test(' Debe mostrar el <EjercicioUno /> correctamente', () => {

        // const value = 10;

        const wrapper = shallow( <CounterApp  />);

        expect( wrapper ).toMatchSnapshot();
        
    })

    // test('Debe mostrar el valor por defecto de 100', () => {
        
        
       

    //     const wrapper = shallow( 
    //         <CounterApp
    //             value={ 100 }
                
    //         />);

    //     const valorContador = wrapper.find('h2').text();
    //     console.log( valorContador);

    //     expect( valorContador ).toBe( "100" );
    // })

    test('Debe de incrementar conel boton de +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');
        const valorContador = wrapper.find('h2').text();

        expect( valorContador).toBe('11');
        
    });


    test('Debe de decrementar conel boton de -1', () => {

        const btn1 = wrapper.find('button').at(1).simulate('click');
        const valorContador = wrapper.find('h2').text();

        expect( valorContador).toBe('9');
        
    });


    test('Debe colocar el valor de por defecto', () => {


        // const wrapper = shallow( <CounterApp  value={ 100 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        const valorContador = wrapper.find('h2').text().trim();

        expect( valorContador).toBe('10');
        
    });
    
    
    
})
