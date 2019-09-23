const { crearArchivo, listarTabla } = require('./multiplicar/Multiplicacion');
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
let base = 7;
let comando = argumentos._[0];

switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        console.log('Tu opcion es listar');
        break;

    default:
        console.log(`Comando no reconocido:: ${comando}`);
}

// crearArchivo(base)
//     .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
//     .catch(error => console.log(error));