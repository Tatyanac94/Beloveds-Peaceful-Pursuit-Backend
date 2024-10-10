import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import forumRoutes from './api/routes/forumRoutes';
import postRoutes from './api/routes/postRoutes';
import commentRoutes from './api/routes/commentRoutes';
import postLikeRoutes from './api/routes/postLikeRoutes';
import commentLikeRoutes from './api/routes/commentLikeRoutes';
import { errorHandler } from './api/middleware/errorHandler';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Mental Health Support Platform API!');
});

app.use('/forums', forumRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/post-likes', postLikeRoutes);
app.use('/comment-likes', commentLikeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
