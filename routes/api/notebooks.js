const express = require('express');
const router = express.Router();
const notebookCtrl = require('../../controllers/api/notebooks');


router.post('/', notebookCtrl.create);
router.get('/', notebookCtrl.index);
router.get('/:id', notebookCtrl.show);
router.put('/:id', notebookCtrl.update);
router.delete('/:id', notebookCtrl.delete);

module.exports = router;