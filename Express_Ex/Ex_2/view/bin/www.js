var app = require('../app');
var debug = require('debug')('view-pug:server');
var http = require('http');


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val){

    var port = parseInt(val, 10);

    if(isNaN(port)){

        return val;

    }
    
    if (port >= 0){

        return port;

    }

    return false;

}


function onError(error){

    if (error.syscall !== 'listen'){


        throw error;
    }

    var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

    switch(error.code){

    case 'EACCESS':
    console.error(bind + ' requires elevated priveleges');
    process.exit(1);
    break;
    default:
    throw error;

    }
}

function onListening(){

    var address = server.address();
    var bind = typeof address = 'string'
    ? 'pipe ' + address 
    : 'port ' + address.port;
    debug('Listening on ' + bind);

}

