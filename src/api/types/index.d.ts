export interface Forum {
  id: number;
  title: string;
}

export interface Post {
  id: number;
  content: string;
  forumId: number;
  timestamp: Date;
}

export interface Comment {
  id: number;
  content: string;
  postId: number;
  timestamp: Date;
}

export interface PostLike {
  id: number;
  postId: number; // Use camelCase for consistency
  userId: string; // Use camelCase for consistency
}

export interface CommentLike {
  id: number;
  commentId: number; // Use camelCase for consistency
  userId: string; // Use camelCase for consistency
}
