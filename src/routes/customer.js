const {Router} = require('express');
const customerController = require('../controllers/customerController');
const router = Router();

router.get('/',customerController.list);
router.post('/add',customerController.save);
router.get('/delete/:dni',customerController.delete);
router.get('/update/:dni',customerController.edit);
router.post('/update/:dni',customerController.update);


module.exports= router;