import { getUser, getUsuarioActivo } from '../../base/05-funciones';



describe('Pruebas de 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    });


    test('getUsuarioActivo debe de retornar un objeto con una key vacia', () => {

        const nombre = 'victor'

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual( userTest );

    });
    


    
    
});