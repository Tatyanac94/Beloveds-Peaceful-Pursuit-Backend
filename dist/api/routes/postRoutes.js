"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const router = (0, express_1.Router)();
// Route to create a new post
router.post('/', postController_1.createPost);
// Route to get posts by forum ID
router.get('/:forumid', postController_1.getPostsByForum);
// Route to get all posts
router.get('/', postController_1.getAllPosts); // New route for all posts
exports.default = router;
