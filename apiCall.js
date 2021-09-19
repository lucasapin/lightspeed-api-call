var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.lightspeedapp.com/API/Account/262389/Sale.json",
  headers: {
    Authorization: "Bearer e3f316158347e3238a22313cdbe4393fe05890e9",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
