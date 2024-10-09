export interface Comment {
    id: number;
    content: string;
    postId: number;
    timestamp: Date;
  }
  
  export interface Forum {
    id: number;
    name: string;
    description: string;
    timestamp: Date;
  }
  
  export interface Post {
    id: number;
    forumId: number;
    user_id: string; // or username if you changed it
    content: string;
    timestamp: Date;
  }
  
  export interface PostLike {
    id: number;
    postId: number;
    timestamp: Date;
  }
  
  export interface CommentLike {
    id: number;
    commentId: number;
    timestamp: Date;
  }
  