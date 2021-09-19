const apiCallFromRequest = require("./requestCall");
const http = require("http");

http
  .createServer((req, res) => {
    apiCallFromRequest.callApi((response) => {
      //console.log(JSON.stringify(response));
      res.write(response);
      res.end();
    });
    // res.end();
  })
  .listen(8000);

console.log("service running on 8000 port....");
