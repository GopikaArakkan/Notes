const mongoose = require('mongoose')
const type = require('mongoose/lib/schema/operators/type')

const notesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true,
        trim: true //removes whitespace
    },
    category: {
        type: String,
        default: 'General'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    
})

const notesModel = mongoose.model('Notes',notesSchema)
module.exports = notesModel