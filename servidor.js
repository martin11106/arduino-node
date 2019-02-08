var express = require('express')
var app = express()
const net = require('net')
const server = require('http').Server(app)
const socket = require('socket.io')(server)
const os = require('os')

var interfaces = os.networkInterfaces();
var ipdinamica;

for(var i in interfaces){
    for(var k in interfaces[i]){
        var address = interfaces[i][k]
        if (address.family == 'IPv4' && !address.internal) {
            ipdinamica = address.address.toString('utf8');
            console.log(ipdinamica);
        }
    }
}

//var HOST = 'node-socket-servidor.herokuapp.com';
var PORT = process.env.PORT || 39584;

// socket.listen(PORT, function(){
//     console.log('servidor activo'+ PORT + ':' + HOST)
// })

var ser = net.createServer(function(so){
        console.log('Usuario conectado en el puerto: ', PORT)
    so.on('data', function(data){
        console.log(data.toString('utf8'))
    })
    so.on('close', function(){
        console.log('Usuario desconectado')
    })
});

ser.listen(PORT);