var Medicamento = require('../Models/Medicamento'),
    express = require('express'),
    router = express.Router();

router.post('/',(req,res)=>{
    Medicamento.find({},(err,docs)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

router.post('/crearMediamneto',(req,res)=>{
    var body = req.body;
    Medicamento.insertMany({
        Nombre: body.nombre,
        Marca: body.Marca,
        Precio: body.Precio,
        Tipo: body.tipo
    }, (err,rest)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/eliminarMedicamento',(req,res)=>{
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

router.post('/editarMedicamento',(req,res)=>{
    var body = req.body;
    Mascota.updateMany({
        nombre: body.nombre
    },{
        $set:{
            Nombre: body.Nombre,
            Marca: body.Marca,
            Precio: body.Precio,
            Tipo: body.Tipo
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