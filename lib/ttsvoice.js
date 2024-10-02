const axios = require("axios")

async function tiktokTts(text, model) {
  try {
    const modelVoice = model ? model : "en_us_001";
    const { status, data } = await axios.post(
      "https://tiktok-tts.weilnet.workers.dev/api/generation",
      {
        text: text,
        voice: modelVoice,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

module.exports = { tiktokTts }