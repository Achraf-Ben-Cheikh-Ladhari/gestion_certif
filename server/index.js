const express=require('express');
const formationApi=require('./routes/formations');
const certificationApi=require('./routes/certifications');
const userApi=require('./routes/users');
const absApi=require('./routes/absent');
const cors=require('cors');
require('./config/connect');
const app=express();
app.use(express.json());
app.use(cors());
app.use('/formation',formationApi);
app.use('/user', userApi);
app.use('/certification', certificationApi);
app.use('/absent', absApi);
app.listen(process.env.PORT,()=>{
    console.log('server working !'+process.env.PORT)
})