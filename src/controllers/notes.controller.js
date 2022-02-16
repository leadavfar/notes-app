const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.renderNoteFrom = (req, res) => {
    res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title: title, description: description })
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note added successfully')
    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' }).lean();
    res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id) {
        req.flash('error_msg', 'No authorized')
        return res.redirect('/notes');
    }
    console.log(note)
    res.render('notes/edit-note', { note })
}

notesCtrl.updateNotes = async (req, res) => {
    const { title, description, } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Note updated successfully')
    res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/notes");
};

module.exports = notesCtrl