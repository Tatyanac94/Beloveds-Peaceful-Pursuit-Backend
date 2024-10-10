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
    username?: string;
    content: string;
    timestamp: Date;
  }
  
  export interface PostLike {
    id: number;
    postId: number;
    username?: string;
    timestamp: Date;
  }
  
  export interface CommentLike {
    id: number;
    commentId: number;
    username?: string;
    timestamp: Date;
  }
  