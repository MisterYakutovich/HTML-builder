const fs=require("fs")
const path=require("path")

fs.readdir('secret-folder',(err,data)=>{  
    data.forEach(file=>{
    console.log(file+" - "+path.extname(file)+" - "+fs.statSync("secret-folder/" +file).size+"B")      
    }) 
})

fs.readdir('secret-folder',{ withFileTypes: true },(err,data)=>{
      data.forEach(file => {
      console.log(file.isDirectory());
    })
})
//fs.stat("secret-folder/", function(err, stats) {
   // console.log(stats);
//})