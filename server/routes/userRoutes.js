const express = require('express')
const bodyParser = require('body-parser')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const authenticateToken = require('../middleware/authToken')
const checkout = require('../models/checkout')

const router = express.Router();
router.use(bodyParser.json())

router.post('/register', (req,res) => {
    const userData = req.body
    user.createUser(userData, (err, result) => {
        if(err) {
            return res.status(500).json({error: 'internal server error'})
        }

        return res.status(201).json({message: 'user created succesfully'})
    })
})

router.post('/login', (req, res) => {
    const userData = req.body
    user.authUser(userData, (err, result) => {
        if(err) {
            return res.status(500).json({message: 'internal server error'})
        }

        if(result.length > 0) {
            const user = result[0];
            const userId = user.id
            const username = user.username

            const secretKey = 'hfgruhgurhgubuyrbgcyubyubgyubcnyuyugb5876t67ncty78567c6n456387n98xy6765657cx65n43865c936439x984'

            const token = jwt.sign({userId, username}, secretKey, {expiresIn: '1h'})
            res.json({token})
        } else {
            res.status(401).json({message: 'invalid username or password'})
        }
    })
})

router.post('/checkout', authenticateToken, (req,res) => {
    const checkoutData = req.body
    checkout.createCheckout(checkoutData, (err, result) => {
        if(err) {
            return res.status(500).json({error: 'internal server error'})
        }

        return res.status(201).json({message: 'checkout created succesfully'})
    })
})


router.get('/', authenticateToken, (req,res) => {
    return res.status(200).json({message: 'okee'})
})


module.exports = router