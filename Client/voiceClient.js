const { VoiceClient } = require('djs-voice')
const client = require('../index')
const { } = require('../config.json')
const { mongo } = require('mongoose')

const voiceClient = new VoiceClient({
    allowBots: true,
    client: client,
    debug: true,
    mongooseConnectionString: mongo
})


module.exports = voiceClient;