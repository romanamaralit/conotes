const Notebook = require('../../models/notebook')

//not using these yet, just wanted to have them saved here for reference
module.exports = {
    create: createNotebook,
    index,
    show: showNotebook,
    update: updateNotebook,
    delete: deleteNotebook
}

async function createNotebook(req, res) {
    try {
        const notebook = await Notebook.create(req.body);
        await notebook.save()
    } catch (err) {
        console.log(req.body)
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        const notebooks = await Notebook.find({})
        res.json(notebooks)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function showNotebook(req, res) {
    try {
        const notebook = await Notebook.findById(req.params.id)
        res.json(notebook)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateNotebook(req, res) {
    try {
        await Notebook.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        res.status(400).json(err);
    }
}



async function deleteNotebook(req, res) {
    try {
        await Notebook.findByIdAndDelete(req.params.id)
    } catch (err) {
        res.status(400).json(err);
    }
}