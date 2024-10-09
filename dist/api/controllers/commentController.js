"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsByPost = exports.createComment = void 0;
const supabaseClient_1 = require("../../config/supabaseClient");
const createComment = (req, res) => {
    const { postid, content, name } = req.body;
    const username = name?.trim() || 'anonymous';
    supabaseClient_1.supabase
        .from('supportcomment')
        .insert([{ postid, username, content }])
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(201).json(data);
    });
};
exports.createComment = createComment;
const getCommentsByPost = (req, res) => {
    const { postid } = req.params;
    supabaseClient_1.supabase
        .from('supportcomment')
        .select('*')
        .eq('postid', postid)
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json(data);
    });
};
exports.getCommentsByPost = getCommentsByPost;
