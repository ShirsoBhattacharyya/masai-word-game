const express = require("express");
const dbConnect = require("./components/config/db");
const userRouter=require('./components/features/routes/user.routes');
const wordRouter=require('./components/features/routes/word.routes');
const cors = require("cors");
const server = express();
const PORT=process.env.PORT||8080;

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.get("/", (req, res) => {
  res.send("Welcome to Masai Word Game API");
});
server.use('/user',userRouter);
server.use('/word',wordRouter);

server.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server started at port ${PORT}`);
});
