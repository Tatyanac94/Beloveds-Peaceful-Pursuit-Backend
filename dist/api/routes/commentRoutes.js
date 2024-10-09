"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controllers/commentController");
const router = (0, express_1.Router)();
// Define routes for comments
router.post('/', commentController_1.createComment);
router.get('/:postId', commentController_1.getCommentsByPost);
exports.default = router;
