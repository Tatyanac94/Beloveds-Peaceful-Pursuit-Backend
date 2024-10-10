import { Comment, Forum, Post, PostLike, CommentLike } from '../models/index';

declare global {
  namespace Express {
    interface Request {
      // If I decide to implement user-related features in the future, I can add this later
      username?: string; // Optional username for anonymous users
    }
  }

  // Additional type aliases for convenience
  type CommentType = Comment;
  type ForumType = Forum;
  type PostType = Post;
  type PostLikeType = PostLike;
  type CommentLikeType = CommentLike;
}
