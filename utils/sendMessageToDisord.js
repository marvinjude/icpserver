const axios = require("axios").default;

async function sendMessageToDiscord(data) {
  await axios.post(process.env.DISCORD_WEBHOOK, data);
}

module.exports = { sendMessageToDiscord };
