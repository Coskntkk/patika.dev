// Import modules
const express = require('express');
const pageController = require('../controllers/pageController');

// Create router
const router = express.Router();

// Set up routes
router.route("/").get(pageController.getIndexPage);

router.route("/projects")
    .post(pageController.createProject);


router.route("/projects/:id")
    .put(pageController.updateProject)
    .delete(pageController.deleteProject);


// Export router
module.exports = router;