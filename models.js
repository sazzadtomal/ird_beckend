const db=require("./database")


 const readCategories=(callback)=>{
    const sql='SELECT * FROM category';
    db.all(sql,[],callback)
 }

 const readSubCategories=(callback,id)=>{

   const sql='SELECT * FROM sub_category WHERE cat_id= ?';
   db.all(sql,[id],callback)
}
 const readDuaBySubCategories=(callback,id)=>{
   console.log(id)
   const sql='SELECT * FROM dua WHERE subcat_id= ?';
   db.all(sql,[id],callback)
}




module.exports={readCategories,readSubCategories,readDuaBySubCategories}