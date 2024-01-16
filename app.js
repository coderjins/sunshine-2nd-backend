// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const routes = require("./src/routes");

// const app = express()
// dotenv.config();
// app.use(cors())
// app.use(express.json())
// app.use(routes)
// const server = http.createServer(app)


// const PORT = process.env.TYPEORM_SERVER_PORT;

// const start = async () => { // 서버를 시작하는 함수입니다.
//     try {
//       server.listen(PORT, () => console.log(
//         `Server is listening on ${PORT}`))
//     } catch (err) { 
//       console.error(err)
//     }
//   }

// start()

const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  return app
};

module.exports = createServer;