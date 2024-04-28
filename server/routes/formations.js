const express=require('express');
const router=express.Router();
const Formation=require('../models/formations');

////////////////////////////////////////

//Sauvegarde
router.post('/ajout',async(req,res)=>{
    let data=req.body;
    let newFormation=new Formation(data)
    newFormation.save()
    .then((saved)=>{
       filename='';
       console.log(saved);
       res.status(200).send(saved);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})

//get all formations
router.get('/get',(req,res)=>{
    Formation.find({}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})
//get formation by id
router.get('/get/:id',(req,res)=>{
    id=req.params.id;
    Formation.findOne({_id:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

//get formation by user id
router.get('/getformationbyuser/:id',(req,res)=>{
    id=req.params.id;
    Formation.find({formateur:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

//update by id 
router.put('/update/:id',async(req,res)=>{
    id=req.params.id;
    let data=req.body;
   
   
    Formation.findByIdAndUpdate({_id:id},data)
    .then((formation)=>{
            res.status(200).send(formation);
        //console.log(formation.image+ " 3************");
    }).catch((err)=>{
        console.log(err);
    });

})



//delete formation by id
router.delete('/supprimer/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.status(400).send({
            message:" content is required!"
        });
    }
    Formation.deleteOne({_id:id}).then((data)=>{
        if (!data){
            res.status(404).send({message:" Formation not Found!"});
        }
        res.status(200).send({message: "Formation Succufully deleted"});
    })
})

module.exports=router;