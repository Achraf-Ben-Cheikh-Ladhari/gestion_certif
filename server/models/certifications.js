const mongoose=require('mongoose');
const Certifications=mongoose.model('Certifications',{
    titre:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    lieu:{
        type:String
    },
    idFormateur:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    idFormation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formations",
        required: true,
    },
    idEmploye:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }
})
module.exports=Certifications;