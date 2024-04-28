const mongoose=require('mongoose');
const Users=mongoose.model('Users',{
    name:{
        type:String
    },
    
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","formateur","employe"],
        default:"employe"
    }
})
module.exports=Users;