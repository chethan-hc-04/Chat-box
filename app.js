const express=require("express");
const app=express();
const path=require("path");

const http=require("http");
const server=http.createServer(app);

const {Server}=require("socket.io");

app.use(express.static(path.join(__dirname, "/public")))

const io=new Server(server);



app.get("/",(req,res)=>{
    res.sendFile("/public/index.html");

})

io.on('connection', (socket) => {
 socket.on("usermessag",msg=>{
   io.emit("message",msg);

 });
  });
  


server.listen(9000,()=>{
    console.log("listening on port number 9000");
})
