const app =require('./app.js');
const {server_port, db_url} =require('./secret.js');
const connectDB =require('./config/db.js');
app.listen(server_port,()=>{
  console.log("listening to port " + server_port);
  connectDB();
});