export interface PostData {
   user_id: number;
   image: string;
   title: string
   body: string;
}

export interface CommentData {
  user_id: number;
  post_id: number;
  body: string;
}