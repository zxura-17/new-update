const axios = require('axios')

async function luminai(prompt) {
  try {
    const response = await axios.post('https://luminai.siputzx.my.id/', {
      content: prompt
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { luminai }