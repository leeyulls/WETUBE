//const express = require('express');
import express from "express"; 
import morganLogger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser, { json } from "body-parser";
//import {userRouter} from './routers/userRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import userVideo from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";





//const handle = () =>{
    
//}

//const PORT = 4000; //->init.js 로 이동

//ver.1
// function handleListening(){
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
//ver.2
//arrow function  으로 변환
//const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);  //->ver.3  init.js 로 이동


//app.listen(PORT,handleListening); //->init.js 로 이동

//app.get('/',function(req,res){
//    res.send('hello world');
//})

// const middleware = (req,res,next)=>{
//     res.send("not heppening");
// }
// app.get('/middleware',middleware,handleProfile); //middleware 까지만 실행 
const app = express();

// const handleHome = (req,res) => res.send('hello world');
// const handleProfile = (req,res)=> res.send('handleProfile'); ;
// const between = (req,res,next) => {
//     console.log("I'm between");
//     next();
// }

//app.get('/',between,handleHome);  // between 2번 실행됨 
//app.get('/Profile',handleProfile); //between 1번 실행

//뷰 엔진 설정
app.set("view engine","pug");

//app.use(between); // 전역 middleware 설정
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morganLogger("dev")); 



//ver 1.
//app.use("/",globalRouter); // use : 누군가 / 접속시 globalRouter 전체 사용
//ver 2. routes.js 사용
app.use(routes.home,globalRouter);
app.use(routes.users,userRouter); 
app.use(routes.videos,userVideo);


export default app; // 누군가 app.js 호출 시 app 반환