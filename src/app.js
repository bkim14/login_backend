const express=require('express');
const router=express.Router();
const authRouter=require('./auth');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/test',(req,res)=>{
  console.log(req.body.id);
  res.send({message:'yes'})
})

app.use('/auth',authRouter)

const PORT=8080;


app.listen(PORT,()=>{console.log('listening on port'+8080)})
