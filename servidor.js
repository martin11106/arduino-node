var express=require('express')
var aplicacion=express()

const net =require('net')
const serve=require('http').Server(aplicacion)
const socket=require('socket.io')(serve)

var HOST="192.168.43.165"
var PORT=15000

serve.listen(PORT ,function () {
    console.log('servidor'+PORT+"host"+HOST)
})
var ser=net.createServer(function(socket){
   socket.on('connection',function(){
       console.log('usuario nuevo'+socket.remoteAddress+' '+socket.handshake.PORT)
   })   
    socket.on('data',function(data){
        console.log(Buffer.from(data, 'hex').toString('utf8'))
    })
    socket.on('close',function(){
        console.log('usuario desconectado')
    })
})
ser.listen(PORT,HOST)

console.log('hola node')
