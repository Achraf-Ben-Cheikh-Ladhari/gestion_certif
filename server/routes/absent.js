const express=require('express');
const router=express.Router();
const abs=require('../models/absent');

////////////////////////////////////////

//Sauvegarde
router.post('/ajout',async(req,res)=>{
    let data=req.body;
    let newabs=new abs(data)
    newabs.save()
    .then((saved)=>{
       filename='';
       console.log(saved);
       res.status(200).send(saved);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})

//get all absent
router.get('/get',(req,res)=>{
    abs.find({}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})
//get absent by id
router.get('/get/:id',(req,res)=>{
    id=req.params.id;
    abs.findOne({_id:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

//get absent by id employe and id formateur
router.get('/get/:idemp/:idform',(req,res)=>{
    idemp=req.params.idemp;
    idform=req.params.idform
    abs.findOne({idEmploye:idemp,idFormation:idform}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

//update by id 
router.put('/update/:id',async(req,res)=>{
    id=req.params.id;
    let data=req.body;
   
   
    abs.findByIdAndUpdate({_id:id},data)
    .then((absent)=>{
            res.status(200).send(absent);
        
        //console.log(absent.image+ " 3************");
    }).catch((err)=>{
        console.log(err);
    });

})

//update by id user and formation
router.put('/update/:id',async(req,res)=>{
    id=req.params.id;
    let data=req.body;
   
   
    abs.findByIdAndUpdate({_id:id},data)
    .then((absent)=>{
            res.status(200).send(absent);
        
        //console.log(absent.image+ " 3************");
    }).catch((err)=>{
        console.log(err);
    });

})
//delete absent by id
router.delete('/supprimer/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.status(400).send({
            message:" content is required!"
        });
    }
    abs.deleteOne({idFormation:id}).then((data)=>{
        if (!data){
            res.status(404).send({message:" abs not Found!"});
        }
        res.status(200).send({message: "abs Succufully deleted"});
    })
})

module.exports=router;