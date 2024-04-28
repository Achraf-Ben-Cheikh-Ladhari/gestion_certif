const express=require('express');
const router=express.Router();
const Certification=require('../models/certifications');

////////////////////////////////////////

//Sauvegarde
router.post('/ajout',async(req,res)=>{
    let data=req.body;
    let newCertification=new Certification(data)
    newCertification.save()
    .then((saved)=>{
       filename='';
       console.log(saved);
       res.status(200).send(saved);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})

//get all certifications
router.get('/get',(req,res)=>{
    Certification.find({}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})
//get certification by id
router.get('/get/:id',(req,res)=>{
    id=req.params.id;
    Certification.findOne({_id:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})
//get certification by formateur id
router.get('/getcertificationbyformateur/:id',(req,res)=>{
    id=req.params.id;
    Certification.find({idFormateur:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

//get certification by formateur id
router.get('/getcertificationbyemploye/:id',(req,res)=>{
    id=req.params.id;
    Certification.find({idEmploye:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

router.get('/getcertificationbyformation/:id',(req,res)=>{
    id=req.params.id;
    Certification.find({idFormation:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})


//update by id 
router.put('/update/:id',async(req,res)=>{
    id=req.params.id;
    let data=req.body;
   
   
    Certification.findByIdAndUpdate({_id:id},data)
    .then((certification)=>{
            res.status(200).send(certification);
        
        //console.log(certification.image+ " 3************");
    }).catch((err)=>{
        console.log(err);
    });

})

//delete certification by id
router.delete('/supprimer/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.status(400).send({
            message:" content is required!"
        });
    }
    Certification.deleteOne({idFormation:id}).then((data)=>{
        if (!data){
            res.status(404).send({message:" Certification not Found!"});
        }
        res.status(200).send({message: "Certification Succufully deleted"});
    })
})

module.exports=router;