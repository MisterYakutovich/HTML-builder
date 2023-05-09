const fs=require("fs")
const path=require("path")
const {stdout,stdin}=process;

stdout.write("enter any text or end the process Ctrl + C\n")
stdin.on("data",data=>{
    stdout.write("enter any text or end the process Ctrl + C\n")
    const myString=data.toString()
    fs.appendFile(path.join(__dirname,"write.txt"),myString,(err)=>{  
       if (myString==="exit") process.exit()
})
})
//process.on("exit",()=>stdout.write("goodby"))

//process.exit()
