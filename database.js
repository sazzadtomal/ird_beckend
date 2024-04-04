const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('dua_main.sqlite',(err)=>{


    if(err){
        console.error(err.message)
    }
    else{
        console.log("connected to database")
    }
});


module.exports=db;