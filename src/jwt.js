exports.authenticate = (req,res,next)=>{
  if(req.id==='qnddhr12'){
    req.authData = {
      status:200,
      message:'success',
      jwt:'1',
    }
  }else{
    req.authData = {
      status : 400,
      message : 'fail',
    }
  }
}
