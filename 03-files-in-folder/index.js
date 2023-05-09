const fs=require("fs")
const path=require("path")
const fsPromises = fs.promises;

fs.readdir(path.join(__dirname,'secret-folder'),(err,data)=>{  
    data.forEach(file=>{     
        fs.stat(path.join(__dirname,'secret-folder',file), function(err, stats) {               
            console.log(`${file} - ${path.extname(file)} -  ${stats.size}B`)  
               })           
      })
    })
    
fs.readdir(path.join(__dirname,'secret-folder'),{ withFileTypes: true },(err,data)=>{
    data.forEach(file => {
        console.log(file.isDirectory());
      })
    })
   