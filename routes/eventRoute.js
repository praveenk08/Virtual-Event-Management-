const express = require('express');
const eventController = require('../controllers/events/eventController');
const auth = require("../middleware/auth");
const router = express.Router();

// Define routes
router.get('/events', auth, eventController.events);
router.get('/events/:id', auth ,eventController.getEvent);
router.post('/events', auth, eventController.addEvent);
router.put('/events/:id', auth, eventController.updateEvent);
router.delete('/events/:id', auth, eventController.deleteEvent);


module.exports = router;