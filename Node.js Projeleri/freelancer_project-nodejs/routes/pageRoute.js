// Import modules
const express = require('express');
const pageController = require('../controllers/pageController.js');

// Create router
const router = express.Router();

// Set up routes
router.route("/").get(pageController.getIndexPage);


// Export router
module.exports = router;