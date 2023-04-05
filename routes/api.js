const router = require('express').Router();

router.use('/usuarios', require('./api/usuarios'));
router.use('/partes', require('./api/partes'));
router.use('/empleados', require('./api/empleados'));
router.use('/herramientas', require('./api/herramientas'));
router.use('/obras', require('./api/obras'));
router.use('/vehiculos', require('./api/vehiculos'));
router.use('/contenedores', require('./api/contenedores'));

module.exports = router;