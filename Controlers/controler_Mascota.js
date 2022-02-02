var Mascota = require('../Models/Mascota'),
    express = require('express'),
    router = express.Router();

router.post('/',(req,res)=>{
    Mascota.find({},(err,docs)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

router.post('/crearMascota',(req,res)=>{
    var body = req.body;
    Mascota.insertMany({
        Nombre: body.nombre,
        Raza: body.Raza,
        Tamaño: body.Tamaño,
        Color: body.Color
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/eliminarMascota',(req,res)=>{
    Mascota.remove({
        nombre: req.body.nombre
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/editarMascota',(req,res)=>{
    var body = req.body;
    Mascota.updateMany({
        nombre: body.nombre
    },{
        $set:{
            Nombre: body.nombre,
            Raza: body.Raza,
            Tamaño: body.Tamaño,
            Color: body.Color
        }
    },(err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
    
});

module.exports = router;
