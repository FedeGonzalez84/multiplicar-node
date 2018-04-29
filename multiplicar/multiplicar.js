const fs = require('fs');
const colors = require('colors');
//----------------------------------------------------------------------------
listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i }`);
    }
};
//----------------------------------------------------------------------------
crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i } \n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
};
//----------------------------------------------------------------------------
module.exports = {
    crearArchivo,
    listarTabla
};