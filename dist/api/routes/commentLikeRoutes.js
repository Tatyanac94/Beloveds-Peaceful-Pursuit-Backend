"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentLikeController_1 = require("../controllers/commentLikeController");
const router = (0, express_1.Router)();
router.post('/', commentLikeController_1.likeComment);
exports.default = router;
