import { registrar } from './operaciones.mjs';

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if(operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = argumentos.slice(1);
    registrar(nombre, edad, animal, color, enfermedad);
}


//if(operacion === 'leer') {
//    leer()
//}
