const express=require('express')
const app=express();
app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.sendFile(__dirname+'/web_dev/login.html');
})


app.listen(3000,(req,res)=>{
    console.log("Server started at port 3000");
})