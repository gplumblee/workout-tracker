const {Schema, model} = require('mongoose');

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:{
        type: Array,
        default: []
    }
})

module.exports = model('workout', workoutSchema)