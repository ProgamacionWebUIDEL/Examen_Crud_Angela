var mongoose = require('mongoose');
Schema=mongoose.Schema;

var MedicamentoSchema = new mongoose.Schema({
    Nombre:{type:String},
    Marca:{type:String},
    Precio:{type:Number},
    Tipo:{type:String}
});

var Medicamento = mongoose.model('Medicamento',MedicamentoSchema);
module.exports=Medicamento;