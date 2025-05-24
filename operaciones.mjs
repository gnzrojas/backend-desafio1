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

export { registrar }