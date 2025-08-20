// Building simple Hapi.js web Server
// npm install @hapi/hapi
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server is running at ${server.info.uri}`);
};

init();
// to see response, run terminal command:
// curl -X GET http://localhost:5000  ==> Not Found (Hapi default response if theres no event handler)
