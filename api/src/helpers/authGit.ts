const axios = require('axios');


const requestGithubToken = (client_id,client_secret,code) =>
  axios.post('https://github.com/login/oauth/access_token', {
   client_id,client_secret,code
  })
    .then(res => {
      
      return res
    })
    .catch(error => {
      console.log(error)
      throw new Error(JSON.stringify(error));
    });
export default requestGithubToken;