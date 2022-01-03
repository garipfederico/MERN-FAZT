require('dotenv').config();

const app = require('./app')
require('./database');
 
// Con async / await se ejecuta una linea y cuando termina la siguiente.
async function main() {
     await app.listen(app.get('port'));
     console.log('server on port', app.get('port'));
}

main();
