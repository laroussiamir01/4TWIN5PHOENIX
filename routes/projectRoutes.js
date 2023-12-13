const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

// router.get('/', projectController.getAllProjects);
// router.post('/create', projectController.createProject);
// router.put('/:id', projectController.updateProject);
// router.delete('/:id', projectController.deleteProject);
router.get('/', projectController.getAllProjects);
router.post('/create', projectController.createProject);
router.put('/update/:name', projectController.updateProject); // Utilise le nom pour la mise à jour
router.delete('/delete/:name', projectController.deleteProject); // Utilise le nom pour la suppression
router.get('/byName/:name',projectController.getProjectByName);
module.exports = router;
