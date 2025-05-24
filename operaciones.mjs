import fs from 'fs';

const citas = 'citas.json'

//Función para registrar un nuevo paciente
const registrar = (nombre, edad, animal, color, enfermedad) => {
    try {
        
        //Lee las citas para no sobreescribir las existentes
        const listaCitas = JSON.parse(fs.readFileSync(citas, 'utf-8'));
        
        const nuevaCita = { nombre, edad, animal, color, enfermedad }

        //Agregar la cita ingresada a la lista
        listaCitas.push(nuevaCita)

        //Escribe/Actualiza las citas en el archivo citas.json
        fs.writeFileSync(citas, JSON.stringify(listaCitas))

        console.log(`Cita de ${nombre} registrada con éxito ✅`);
        

    } catch (error) {

        console.log('❌ No se pudo registrar la cita. Intente nuevamente. Error:', error.message);
        
    }
}
//Función para leer las citas registradas
const leer = () => {
    try {
        const leerCitas = JSON.parse(fs.readFileSync(citas, 'utf-8'));
        console.log('Citas registradas:\n');
        
        //Recorrer la lista de citas para mostrarlas
        leerCitas.forEach((cita, index) => {
            console.log(`Cita #${index + 1}`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Animal: ${cita.animal}`);
            console.log(`Motivo de la cita: ${cita.enfermedad}`);
            console.log('-------------------------------------');
        })
        
    } catch (error) {
        console.log('Error al leer la cita. Error:', error.message);
        
    }
}

export { registrar, leer }