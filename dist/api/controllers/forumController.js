"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForums = exports.createForum = void 0;
const supabaseClient_1 = require("../../config/supabaseClient");
const createForum = (req, res) => {
    const { name, description } = req.body;
    supabaseClient_1.supabase
        .from('forum')
        .insert([{ name, description }])
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(201).json(data);
    });
};
exports.createForum = createForum;
const getForums = (req, res) => {
    supabaseClient_1.supabase
        .from('forum')
        .select('*')
        .then(({ data, error }) => {
        if (error)
            return res.status(400).json({ error: error.message });
        return res.status(200).json(data);
    });
};
exports.getForums = getForums;
