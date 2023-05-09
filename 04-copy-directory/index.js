const fs=require("fs")
const path=require("path")
const fsPromises = fs.promises;

fsPromises.mkdir(path.join(__dirname,'files-copy')).then(function() {
    console.log('Directory created successfully');
}).catch(function() {
    console.log('failed to create directory');
});

 fs.readdir(path.join(__dirname,'files'),(err,data)=>{  
    data.forEach(file=>{
        fs.stat(path.join(__dirname,'files',file), function(err, stats) {               
            console.log(`${file} - ${path.extname(file)} -  ${stats.size}B`)  
    }) 
})
 })

//let { COPYFILE_EXCL } = fs.constants;
fs.copyFile(path.join(__dirname,'files/test-css.css'), path.join(__dirname,'files-copy/test-css.css'), err => {
   if(err) throw err; 
   console.log('Файл успешно скопирован');
});

fs.copyFile(path.join(__dirname,'files/test-image.jpg'), path.join(__dirname,'files-copy/test-image.jpg'), err => {
   if(err) throw err; 
   console.log('Файл успешно скопирован');
});
fs.copyFile(path.join(__dirname,'files/test-js.js'), path.join(__dirname,'files-copy/test-js.js'), err => {
    if(err) throw err;
    console.log('Файл успешно скопирован');
 });
 fs.copyFile(path.join(__dirname,'files/test-text.txt'), path.join(__dirname,'files-copy/test-text.txt'), err => {
    if(err) throw err; 
    console.log('Файл успешно скопирован');
 });
 