const { Groq } = require ("groq-sdk")
const groq = new Groq({ apiKey: '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' });

async function voiceRecognition(stream) {
    return new Promise(async (resolve, reject) => {
        try {
            const recog = await groq.audio.transcriptions.create({
                file: stream,
                model: "whisper-large-v3",
                prompt:
                    "you are cylic and you are a WhatsApp bot, your goal is to help your user to finish their problem. and use Indonesian",
                temperature: 0.35,
                language: "id",
                response_format: "verbose_json",
            })
            resolve(recog.text)
        } catch (v) {
            reject(v)
        }
    })
}

module.exports = { voiceRecognition }