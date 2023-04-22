const {Router} = require('express')
const router = Router()
const {registerUser,loginUser,getMe} = require('../controllers/userController')

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/me',getMe);



module.exports = router;