const express = require('express');
const router = express.Router();


const UserController = require('../controllers/userController');



router.post('/createpost', UserController.posting);
router.get('/display', UserController.display);
router.post('/post/:id', UserController.showById);
router.post('/update/:id', UserController.update);



module.exports = router;