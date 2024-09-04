const dotenv=require('dotenv').config()
const express=require('express');
const cors=require('cors')
const connection=require('./Config/db');
const userRouter = require('./Routes/user.routes');
const babyRouter = require('./Routes/baby.routes');
const beautyRouter = require('./Routes/beauty.routes');
const computerRouter = require('./Routes/computer.routes');
const furnitureRouter = require('./Routes/furniture.routes');
const menClothRouter = require('./Routes/menCloth.routes');
const locationRouter = require('./Routes/location.routes');
const randomRouter = require('./Routes/random.routes');
const womenClothRouter = require('./Routes/womenCloth.routes');


const app=express();
app.use(cors({
    origin:'*'
}))
app.use(express.json())

const PORT=process.env.PORT || 6000;

app.use('/user',userRouter)
app.use('/baby',babyRouter)
app.use('/beauty',beautyRouter)
app.use('/computer',computerRouter)
app.use('/furniture',furnitureRouter)
app.use('/menCloth',menClothRouter)
app.use('/womenCloth',menClothRouter)
app.use('/location',locationRouter)
app.use('/random',randomRouter)
app.use('/womenCloth',womenClothRouter)



app.get('/',(req,res)=>{
try {
    res.status(200).send('Server is working Fine');
} catch (error) {
    res.status(404).send('Error while running Server');
}
})

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Server is running at PORT ${PORT} and database is also connected `)
    } catch (error) {
        console.log(`Error while conneting to server or database ${error}`)
    }
})


