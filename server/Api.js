const express = require('express');
const {Router} = express;

const mongoose = require('mongoose');

const UserController = require('./controller/User');
const ProjectController = require('./controller/Project');

const bodyParser = require('body-parser');
const router = Router();

// mongoose.connect(`mongodb:/${process.env.MLAB_DBUSER}:${process.env.MLAB_PASSWORD}@ds129281.mlab.com:29281/heroku_db`);

router.use(bodyParser.json({'extended': true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('coucou api');
});

// router.get('/users', UserController.getUsers);
// router.get('/user/:id', UserController.getUser);
// router.post('/user', UserController.createUser);
// router.put('/user/:id', UserController.updateUser);
// router.delete('/user/:id', UserController.deleteUser);

// router.get('/projects', ProjectController.getProjects);
// router.get('/project/:id', ProjectController.	getProject);
// router.post('/project', ProjectController.createProject);
// router.put('/project/:id', ProjectController.updateProject);
// router.delete('/project/:id', ProjectController.deleteProject);
// router.get('/user/:id/projects', ProjectController.getUserProjects);

module.exports = router;
