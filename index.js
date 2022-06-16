const express=require('express');
const path=require('path');
const app=express();
app.use('/myfiles',express.static(__dirname+'/styles'));
app.get('/',(req,res)=>{
     res.send("hey guys this is a homepage");
}
)
app.listen('3000',()=>{
    console.log("check 3000 port");
})