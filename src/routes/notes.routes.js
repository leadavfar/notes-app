const router = require('express').Router();

const { renderNoteFrom, createNewNote, renderNotes, renderEditForm, updateNotes, deleteNote } = require('../controllers/notes.controller')


router.get('/notes/add', renderNoteFrom)

router.post('/notes/new-note', createNewNote)


router.get('/notes', renderNotes)


router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit-note/:id', updateNotes)


router.delete('/notes/delete/:id', deleteNote)

module.exports = router;