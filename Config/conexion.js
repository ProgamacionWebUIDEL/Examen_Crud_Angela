var mongoose = require('mongoose');
var connection = mongoose.connect("mongodb+srv://angelac:9jjHMr4xqlfQD18O@cluster0.czg4q.mongodb.net/Sistema?retryWrites=true&w=majority");

mongoose.connection.on('open',(ref)=>{
    console.log('CONECTANDO MONGODB');
});
module.exports=connection; 