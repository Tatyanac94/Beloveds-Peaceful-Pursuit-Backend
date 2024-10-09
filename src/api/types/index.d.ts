import { Comment, Forum, Post, PostLike, CommentLike } from '../models/index';

declare global {
  namespace Express {
    interface Request {
      user?: { // If I decide to implement authentication in the future
        id: string; // or number, based on the user model
        username: string;
      };
    }
  }

  // My additional types are declared here
  type CommentType = Comment;
  type ForumType = Forum;
  type PostType = Post;
  type PostLikeType = PostLike;
  type CommentLikeType = CommentLike;
}
