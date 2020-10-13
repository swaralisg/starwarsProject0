const express = require('express');

const router = express.Router();
const PeopleController = require('../Controllers/peopleController');
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.get('/name/:peoplename', PeopleController.getallpeoplename);
router.get('/:peopleId',PeopleController.getPeopleById);
router.get('/',PeopleController.getallpeople);
router.post('/others', PeopleController.otherAPIs);

module.exports = router;