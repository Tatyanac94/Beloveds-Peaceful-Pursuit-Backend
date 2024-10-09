"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateComment = exports.validatePost = void 0;
const validatePost = (req, res, next) => {
    const { forumid, content, name } = req.body;
    if (!forumid || !content) {
        return res.status(400).json({ error: 'forumid and content are required' });
    }
    if (name && typeof name !== 'string') {
        return res.status(400).json({ error: 'name must be a string' });
    }
    next();
};
exports.validatePost = validatePost;
const validateComment = (req, res, next) => {
    const { postid, content, name } = req.body;
    if (!postid || !content) {
        return res.status(400).json({ error: 'postid and content are required' });
    }
    if (name && typeof name !== 'string') {
        return res.status(400).json({ error: 'name must be a string' });
    }
    next();
};
exports.validateComment = validateComment;
