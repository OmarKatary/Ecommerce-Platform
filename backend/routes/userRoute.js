const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const getToken = require('../util').getToken


router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(signinUser){
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
            
        })
    }else{
        res.status(401).send({msg:'Invalid Email or Password'})
    }
})
router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    })
    const newUser = await user.save();
    if(newUser){
        res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
            
        })
    }else{
        res.status(401).send({msg:'Invalid User Data'})
    }
})

router.get('/createadmin', async (req,res) =>{
    try{
        const user = new User({
            name:'kat',
            email: 'kat@kat.com',
            password: '1234',
            isAdmin: true
        })
        const newUser = await user.save();
        res.send(newUser)
    }
    catch(error){
        res.semd({msg: error.message})
    }
    
})

module.exports = router