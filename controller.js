const {readCategories,readSubCategories,readDuaBySubCategories}=require("./models")




const getCatagories=(req,res)=>{


    readCategories((err,rows)=>{
        if(err){
            res.json({error:"Something went wrong"})
        }
        else{
            res.json(rows)
        }
    })
}

const getSubCatagories=(req,res)=>{

    const id=req.params.category
    
    readSubCategories((err,rows)=>{
        if(err){
            res.json({error:"Something went wrong"})
        }
        else{
            res.json(rows)
        }
    },id)
}
const getDuaBySubCatagories=(req,res)=>{

    const id=req.params.sub
    
    readDuaBySubCategories((err,rows)=>{
        if(err){
            res.json({error:"Something went wrong"})
        }
        else{
            res.json(rows)
        }
    },id)
}




module.exports={getCatagories,getSubCatagories,getDuaBySubCatagories}