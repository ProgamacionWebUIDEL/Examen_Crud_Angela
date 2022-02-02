const express = require('express'),
    router = express.Router(),
    Mascota = require('../Controlers/controler_Mascota');

router.use('/Mascota',Mascota);
module.exports = router;