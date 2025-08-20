// Building a simple Hapi.js web Server------------------------------------------------------------------------------------
// npm install @hapi/hapi
// const Hapi = require("@hapi/hapi");

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "localhost",
//   });

//   await server.start();
//   console.log(`Server is running at ${server.info.uri}`);
// };

// init();
// to see response, run terminal command:-----------------------------------------------------------------------------
// curl -X GET http://localhost:5000  ==> Not Found (Hapi default response if theres no event handler)

// 2. Method/Verb Request and Routing---------------------------------------------------------------------------------
// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "localhost",
//   });

//   server.route(routes); //pake server.route buat routes.js

//   await server.start();
//   console.log(`Server is running at ${server.info.uri}`);
// };

// init();
// to see response, run in terminal/cmd:-----------------------------------------------------------------------
// curl -X GET http://localhost:5000 ==> output: Homepage
// curl -X GET http://localhost:5000/about ==> output: About page
// curl -X GET http://localhost:5000/test ==> utput: Halaman tidak ditemukan
// curl -X POST http://localhost:5000 ==> output: Halaman tidak dapat diakses dengan method tersebut

// 3. Path Parameter-------------------------------------------------------------------------------------------
// https://twitter.com/maudyayunda ==> username = maudyayunda
// di Hapi, pake {} di server.route
// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "localhost",
//   });

//   server.route(routes); //pake server.route buat routes.js

//   await server.start();
//   console.log(`Server is running at ${server.info.uri}`);
// };

// init();
// to see response, run in terminal/cmd:--------------------------------------------------------------------
// curl -X GET http://localhost:5000/hello/brandon ==> output: Hello, brandon!
// curl -X GET http://localhost:5000/hello ==> output: Hello, stranger!

// 4. Query Parameter---------------------------------------------------------------------------------------
// localhost:5000?name=harry&location=bali ==> ada 2 query, (name=harry) dan (location=bali)
// const Hapi = require("@hapi/hapi");
// const routes = require("./routes");

// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "localhost",
//   });

//   server.route(routes); //pake server.route buat routes.js

//   await server.start();
//   console.log(`Server is running at ${server.info.uri}`);
// };

// init();
// to see response, run in terminal/cmd:-------------------------------------------------------------------------
// curl -X GET http://localhost:5000/hello/brandon?lang=id => output: Hai, brandon!
// curl -X GET http://localhost:5000/hello/brandon ==> output: Hello, brandon!


// 5. Body/Payload Parameter---------------------------------------------------------------------------------------
// di native node.js harus pake readable stream (JSON.parse)
// di hapi, ud otomatis ubah JSON jadi javascript object (g perlu pake JSON.parse)
// pk request.payload


