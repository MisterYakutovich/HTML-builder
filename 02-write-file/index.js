const fs=require("fs")
const path=require("path")
const {stdout,stdin}=process;

stdout.write("enter any text or end the process Ctrl + C\n")
stdin.on("data",data=>{
    if (data.toString().trim()==="exit") {
        process.exit()
    }
    stdout.write("enter any text or end the process Ctrl + C\n")
    const myString=data.toString()
    fs.appendFile(path.join(__dirname,"write.txt"),myString,(err)=>{        
})
})
process.on('SIGINT', () => {
    process.exit();
  });
  process.on("exit",()=>stdout.write("goodby"))