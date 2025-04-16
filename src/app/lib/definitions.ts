interface post {
  id: number;
  title: string;
  author: string;
  text: string;
  date: string;
  commentCount: number;
  image?: string;
}

interface comment {
  id?: number;
  text: string;
  date: string;
}

type CommentFormState = {
  success: boolean;
  error: string;
};
