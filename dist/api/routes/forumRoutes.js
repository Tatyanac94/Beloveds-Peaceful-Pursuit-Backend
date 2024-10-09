"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forumController_1 = require("../controllers/forumController");
const router = (0, express_1.Router)();
// Define routes for forums
router.post('/', forumController_1.createForum);
router.get('/', forumController_1.getForums);
exports.default = router;
