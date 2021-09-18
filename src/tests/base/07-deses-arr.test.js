import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {

    test('retornaArreglo debe de retornar un arreglo ', () => {

        const arregloOriginal = retornaArreglo();

        const arregloRetornar = ['ABC', 123];
   
   
        expect( arregloOriginal ).toEqual( arregloRetornar );
        
    })
    

     
    
})
