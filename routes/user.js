const express = require('express')
const router = express.Router()
const User = require('../models/user.js')


router.get('/',(req,res)=>{
    User.findAll()
    .then(users=> {
        res.send(users)
    } )
    .catch(err => {console.log(err)})
})

router.get('/:id',(req,res)=>{
    const {id} = req.params
    User.findByPk(id)
    .then(user=> {
        res.send(user)
    } )
    .catch(err => {console.log(err)})
})

router.put('/:id',async(req,res)=>{
    const {id} = req.params
    const {body} = req
    try {
        let user = await User.findByPk(id)
        if (!user) {
            res.send(400)
        }
        user.nom = body.nom
        user.save()
        .then(()=>{res.send(201)})
        .catch(err=>{console.log(err)})
    } catch (error) {
        console.log(error);
    }
})

router.post('/',(req,res)=>{
    
        const {body} = req
        User.create({...body}).then(()=>{
            console.log("user ajouté");
            res.send(200)
        })
        .catch(err=>{
            console.log(err);
        })
  
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params

    try {
        User.destroy({where : {id : id} }) 
        res.send(200)
    } catch (error) {
        console.log(err);
    }

})


module.exports = router