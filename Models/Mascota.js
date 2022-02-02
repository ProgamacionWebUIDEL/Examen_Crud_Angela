var mongoose = require('mongoose');
Schema=mongoose.Schema;

var MascotaSchema = new mongoose.Schema({
    Nombre:{type:String},
    Raza:{type:String},
    Tamaño:{type:String},
    Color:{type:String}
});

var Mascota = mongoose.model('Mascota',MascotaSchema);
module.exports=Mascota;