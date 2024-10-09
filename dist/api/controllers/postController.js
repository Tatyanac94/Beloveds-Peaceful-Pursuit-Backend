"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.getPostsByForum = exports.createPost = void 0;
const supabaseClient_1 = require("../../config/supabaseClient");
const createPost = (req, res) => {
    const { forumid, content, name } = req.body;
    const username = name?.trim() || 'anonymous';
    supabaseClient_1.supabase
        .from('supportpost')
        .insert([{ forumid, username, content }])
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(201).json(data);
    });
};
exports.createPost = createPost;
const getPostsByForum = (req, res) => {
    const { forumid } = req.params;
    supabaseClient_1.supabase
        .from('supportpost')
        .select('*')
        .eq('forumid', forumid)
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json(data);
    });
};
exports.getPostsByForum = getPostsByForum;
// New function to get all posts
const getAllPosts = (req, res) => {
    supabaseClient_1.supabase
        .from('supportpost')
        .select('*')
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json(data);
    });
};
exports.getAllPosts = getAllPosts;
