const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.renderNoteFrom = (req, res) => {
    res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title: title, description: description })
    console.log(newNote)
    await newNote.save();
    req.flash('success_msg', 'Note added successfully')
    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    console.log(note)
    res.render('notes/edit-note', { note })
}

notesCtrl.updateNotes = async (req, res) => {
    const { title, description, } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Note updated successfully')
    res.redirect('/notes')
}

notesCtrl.deleteNote = (req, res) => {
    req.flash('success_msg', 'Note deleted successfully')
    res.redirect('/notes')
}

module.exports = notesCtrl