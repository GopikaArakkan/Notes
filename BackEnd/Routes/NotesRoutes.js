const express = require('express') //must type
const { createNotes, getAllNotes, updateNotes, deleteNotes } = require('../Controllers/NotesCtrl')//comes automatically

//for create its 'post'
//for update its 'put'
const noteRoutes = express.Router()

noteRoutes.post('/createNote', createNotes) //create
noteRoutes.get('/getNotes', getAllNotes)    //fetch
noteRoutes.put('/updateNote/:id', updateNotes)  //update
noteRoutes.delete('/deleteNote/:id', deleteNotes)   //delete

module.exports = noteRoutes