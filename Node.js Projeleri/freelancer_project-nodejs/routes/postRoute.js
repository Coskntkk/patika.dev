// Import modules
const express = require('express');
const postController = require('../controllers/postController');

// Create router
const router = express.Router();

// Set up routes
router.route("/").post(postController.createPost);

router.route("/:id")
    .put(postController.updatePost)
    .delete(postController.deletePost);

// Export router
module.exports = router;