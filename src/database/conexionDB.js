const mongoose=require('mongoose');


mongoose.connect(process.env.URLCONEXION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("se conecto a mongodb")
    
})
.catch((error)=>{
    console.log(error)
    
})