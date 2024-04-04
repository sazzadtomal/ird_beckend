const express=require("express")
const cors = require('cors')
require("dotenv").config();
const {getCatagories,getSubCatagories,getDuaBySubCatagories}=require("./controller")


const PORT=process.env.PORT || 8000; 

const app=express()

app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(express.json())


app.get("/all_categories",getCatagories)
app.get("/category/:category",getSubCatagories)
app.get("/dua_by_sub/:sub",getDuaBySubCatagories)


app.listen(PORT,()=>{
    ("listening port 8000")
})