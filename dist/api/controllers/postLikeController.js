"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likePost = void 0;
const supabaseClient_1 = require("../../config/supabaseClient");
const likePost = (req, res) => {
    const { postid, name } = req.body;
    const username = name?.trim() || 'anonymous';
    supabaseClient_1.supabase
        .from('postlike')
        .insert([{ postid, username }])
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(201).json(data);
    });
};
exports.likePost = likePost;
