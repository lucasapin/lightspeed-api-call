var request = require("request");
var options = {
  method: "GET",
  url: "https://api.lightspeedapp.com/API/Account/262389/Sale.json",
  headers: {
    Authorization: "Bearer 29d2c44dfd25efc54c2df559dee68747704ab4b6",
  },
};
const CallExternalApiUsingRequest = (callback) => {
  request(options, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    console.log(body);
    return callback(body);
  });
};

module.exports.callApi = CallExternalApiUsingRequest;
