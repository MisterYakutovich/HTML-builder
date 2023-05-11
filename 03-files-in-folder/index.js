const fs=require("fs")
const path=require("path")
const fsPromises = fs.promises;

fs.readdir(path.join(__dirname,'secret-folder'),{ withFileTypes: true },(err,data)=>{  
  data.forEach(file=>{ 
    if (file.isFile()) {
      fs.stat(path.join(__dirname,'secret-folder',file.name), function(err, stats) {             
          console.log(`${file.name} - ${path.extname(file.name)} -  ${stats.size}B`)  
             })
            }            
    })
  
  })
 
/*const full=path.join(__dirname,'secret-folder')
async function prom (arg){
    try{       
let result=await fsPromises.readdir(arg)
    result.forEach((file)=>{ 
        fs.stat(arg,file), (err, stats)=> {  
            console.log(`${file} - ${path.extname(file)} -  ${stats.size}B`) 
            }     
      })   
} catch(err) {
    console.error(err);
  }
}
console.log(prom(full))*/


   
    