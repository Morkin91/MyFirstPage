const express= require ('express');
const app=express();
let port=3000
let path=require('path')

app.use(express.static('public'))// esto ubica la busqueda de imagen en la carpeta nombrada en el string
app.listen(3000,(req,res)=>{console.log(`servidor corriendo en http://localhost:${port}/hola`)})
app.get('/',(req, res)=>{ res.send('Hola mundo')})
app.get('/hola',(req, res)=>{res.sendFile(path.join(__dirname, '/archivo.html'))})