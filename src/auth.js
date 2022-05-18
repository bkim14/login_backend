const router=require('express').Router();
const {authenticate} = require('./jwt');

router.route('/').get((req,res,next)=>{console.log('auth!');res.send({message:'yes'});next();});
router.route('/login').get(authenticate)

module.exports=router;
