"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const router = (0, express_1.Router)();
router.post('/', postController_1.createPost);
router.get('/:forumid', postController_1.getPostsByForum);
router.get('/', postController_1.getAllPosts);
exports.default = router;
