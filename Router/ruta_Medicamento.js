const express = require('express'),
    router = express.Router(),
    Medicamento = require('../Controlers/controler_Medicamento');

router.use('/Medicamento',Medicamento);
module.exports = router;

