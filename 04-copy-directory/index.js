const fs=require("fs")
const path=require("path")
const fsPromises = fs.promises;

fsPromises.mkdir(path.join(__dirname,'files-copy')).then(function() {
    console.log('Directory created successfully');
}).catch(function() {
    console.log('failed to create directory');
});
//-------------------
function newFileOldFile() {
   fs.readdir(path.join(__dirname,'files-copy'),(err,newData)=>{ 
   fs.readdir(path.join(__dirname,'files'),(err,oldData)=>{ 
     
      if(oldData.length<newData.length){
         cloneOldFile()
      } if(newData.length<oldData.length){
         cloneNewFile()
      }  
   })
})
}
newFileOldFile()
//------------------
 function cloneOldFile() {
     fs.readdir(path.join(__dirname,'files-copy'),(err,newData)=>{    
        fs.readdir(path.join(__dirname,'files'),(err,oldData)=>{  
         newData = newData.filter(e => !~oldData.indexOf(e));
         newData.forEach(i=>{
            const oldTest=path.join(__dirname,`files/${i}`)
            const newTest=path.join(__dirname,`files-copy/${i}`) 
            fs.unlink(newTest, err => {
               if(err) throw err; // не удалось удалить файл
               console.log('Файл успешно удалён');
            });

          //  fs.copyFile(newTest,oldTest , err => {  // этот код запускается вместо удаления, если требуется копировать две папки поочереди
           //       if(err) throw err; 
            //   console.log('Файл успешно скопирован');  
          //  })

         })            
      });
   })
}

function cloneNewFile() {
   fs.readdir(path.join(__dirname,'files'),(err,newData)=>{    
      fs.readdir(path.join(__dirname,'files-copy'),(err,oldData)=>{  
       newData = newData.filter(e => !~oldData.indexOf(e));
       newData.forEach(i=>{
       const oldTest=path.join(__dirname,`files/${i}`)
       const newTest=path.join(__dirname,`files-copy/${i}`)
         fs.copyFile(oldTest,newTest , err => {
            if(err) throw err; 
            console.log('Файл успешно скопирован');
         })
      })
    });
})
}

//-------------------------
fs.readdir(path.join(__dirname,'files'),{ withFileTypes: true },(err,data)=>{  
   data.forEach(file=>{ 
     if (file.isFile()) {
       fs.stat(path.join(__dirname,'files',file.name), function(err, stats) {             
           console.log(`${file.name} - ${path.extname(file.name)} -  ${stats.size}B`)  
         })
      }            
   })
 })
