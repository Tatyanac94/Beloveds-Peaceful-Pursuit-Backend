"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postLikeController_1 = require("../controllers/postLikeController");
const router = (0, express_1.Router)();
router.post('/', postLikeController_1.likePost);
exports.default = router;
