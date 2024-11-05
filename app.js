const  express  = require("express");
const createError =require('http-errors');
const bodyParser = require('body-parser');
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const userRouter =require('../docker-express/src/mvc/routers/userRouter.js');
const allErrorAccept =require('/data/data/com.termux/files/home/docker-express/src/serviceProvider/errorHandle/allErrorAccept.js');
 const app = express();
 
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);
const processRequist =(req,res,next)=>{
  let correlationId = req.headers['x-correlation-id'];
  if(!correlationId){
    correlationId= Date.now().toString();
    console.log(correlationId)
    req.headers['x-correlation-id'] = correlationId;
  }
res.set('x-correlation-id', correlationId);
  return next();
}

/*const accessLogStream = fs.createWriteStream(path.join(__dirname, '/access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 */
 
app.use(processRequist);
//custom error user
app.use(allErrorAccept);
//default error handle
app.use((req,res,next)=>{
  next(createError(404, "Route is not found"))
});
app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({
    success:"false",
    message:err.message,
  });
});

module.exports = app;
