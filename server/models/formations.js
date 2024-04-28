const mongoose=require('mongoose');
const Formations=mongoose.model('Formations',{
    titre:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    duree:{
        type:String
    },
    lieu:{
        type:String
    },
    objectifs:{
        type:Array
    },
    ressources:{
        type:Array
    },
    certifGenerated:{
        type:Boolean,
        default:false
    },
    absentGenerated:{
        type:Boolean,
        default:false
    },
    formateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    employes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    status:{
        type:String,
        enum:["done","ongoing"],
        default:"ongoing"
    }
})
module.exports=Formations;