"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeComment = void 0;
const supabaseClient_1 = require("../../config/supabaseClient");
const likeComment = (req, res) => {
    const { commentid, name } = req.body;
    const username = name?.trim() || 'anonymous';
    supabaseClient_1.supabase
        .from('commentlike')
        .insert([{ commentid, username }])
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(201).json(data);
    });
};
exports.likeComment = likeComment;
