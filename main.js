const express = require("express");
const app = express();
const index_Mascota = require("./Router/ruta_Mascota");
const index_Medicamento = require("./Router/ruta_Medicamento");
const connection = require("./Config/conexion");
const bodyParser = require("body-parser");
const cors=requiere('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Ruteo de APIS

app.use('/',index_Mascota);
app.use('/',index_Medicamento);


app.get("/Hola",(req,res)=>{
    var datos=(req.query);
    res.json({mensaje:"Hola " + datos.nombre});
});

app.get("/Suma",(req,res)=>{
    var datos=(req.query);
    var suma=Number(datos.n1) + Number(datos.n2);
    res.json({mensaje:"Resultado de la Suma: " + suma});
});

app.get("/Resta",(req,res)=>{
    var datos=(req.query);
    var resta=Number(datos.n1) - Number(datos.n2);
    res.json({mensaje:"Resultado de la Resta: " + resta});
});

app.get("/Producto",(req,res)=>{
    var datos=(req.query);
    var produc=Number(datos.n1) * Number(datos.n2);
    res.json({mensaje:"Resultado del Producto: " + produc});
});

app.get("/Division",(req,res)=>{
    var datos=(req.query);
    var div=Number(datos.n1) / Number(datos.n2);
    res.json({mensaje:"Resultado de la Division: " + div});
});

app.get("/Calcular_Edad",(req,res)=>{
    var hoy = new Date();
    var cumpleaños = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var m = hoy.getMonth() - cumpleaños.getMonth();

    if (m<0|| (m===0 && hoy.getDate() < cumpleaños.getDate())){
        edad--;
    }
    return edad;
});


app.listen(process.env.PORT || 3000,()=>{
    console.log ("Servidor Iniciado")
});