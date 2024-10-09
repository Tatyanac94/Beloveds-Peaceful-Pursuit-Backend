"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const forumRoutes_1 = __importDefault(require("./api/routes/forumRoutes"));
const postRoutes_1 = __importDefault(require("./api/routes/postRoutes"));
const commentRoutes_1 = __importDefault(require("./api/routes/commentRoutes"));
const postLikeRoutes_1 = __importDefault(require("./api/routes/postLikeRoutes"));
const commentLikeRoutes_1 = __importDefault(require("./api/routes/commentLikeRoutes"));
const errorHandler_1 = require("./api/middleware/errorHandler");
// Load environment variables from .env file
dotenv_1.default.config();
// Create an instance of the express application
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Define routes
app.use('/forums', forumRoutes_1.default);
app.use('/posts', postRoutes_1.default);
app.use('/comments', commentRoutes_1.default);
app.use('/post-likes', postLikeRoutes_1.default);
app.use('/comment-likes', commentLikeRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
