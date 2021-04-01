const router = require('express').Router()

const  userLoginController  = require('../controller/userLoginController')
const alluserGetController = require('../controller/alluserGetController')
const userRegesterController = require('../controller/userRegesterController')
const singleUserGetController = require('../controller/singleUserGetController')

router.post('/login', userLoginController)
router.get('/alluser', alluserGetController)
router.get('/user', singleUserGetController)
router.post('/register', userRegesterController)

module.exports = router 