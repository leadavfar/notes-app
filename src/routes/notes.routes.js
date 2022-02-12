const router = require('express').Router();

const { isAuthenticated } = require('../helpers/auth')

const { renderNoteFrom, createNewNote, renderNotes, renderEditForm, updateNotes, deleteNote } = require('../controllers/notes.controller')


router.get('/notes/add', isAuthenticated, renderNoteFrom)

router.post('/notes/new-note', isAuthenticated, createNewNote)


router.get('/notes', isAuthenticated, renderNotes)


router.get('/notes/edit/:id', isAuthenticated, renderEditForm)

router.put('/notes/edit-note/:id', isAuthenticated, updateNotes)


router.delete('/notes/delete/:id', isAuthenticated, deleteNote)

module.exports = router;