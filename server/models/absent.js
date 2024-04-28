const mongoose=require('mongoose');
const Absents=mongoose.model('Absents',{
    abs:{
        type:Boolean,
        default:true
    },
    idEmploye:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    idFormation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formations",
        required: true,
    },
})
module.exports=Absents;