const fs=require("fs")
const path=require("path")
const fsPromises = fs.promises;

fsPromises.mkdir(path.join(__dirname,'files-copy')).then(function() {
    console.log('Directory created successfully');
}).catch(function() {
    console.log('failed to create directory');
});

 fs.readdir('files',(err,data)=>{  
    data.forEach(file=>{
        fs.stat(path.join(__dirname,'secret-folder',file), function(err, stats) {               
            console.log(`${file} - ${path.extname(file)} -  ${stats.size}B`)  
    }) 
})
 })

//let { COPYFILE_EXCL } = fs.constants;
fs.copyFile('files/test-css.css', 'files-copy/test-css.css', err => {
   if(err) throw err; 
   console.log('Файл успешно скопирован');
});

fs.copyFile('files/test-image.jpg', 'files-copy/test-image.jpg', err => {
   if(err) throw err; 
   console.log('Файл успешно скопирован');
});
fs.copyFile('files/test-js.js', 'files-copy/test-js.js', err => {
    if(err) throw err;
    console.log('Файл успешно скопирован');
 });
 fs.copyFile('files/test-text.txt', 'files-copy/test-text.txt', err => {
    if(err) throw err; 
    console.log('Файл успешно скопирован');
 });
 