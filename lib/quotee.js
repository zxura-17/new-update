const axios = require("axios")

async function Quotly(obj) {
let json;

try {
json = await axios.post("https://quote-api.rippanteq7.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://quote-api-1.jigarvarma2005.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://qc-api.rizzlogy.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://quote-api.ghost19ui.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
return e;
}
}
}
}

const results = json.data.result.image;
const buffer = Buffer.from(results, "base64");
return buffer;
}

function getRandomHexColor() {
return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

module.exports = { Quotly, getRandomHexColor }