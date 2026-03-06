
//prueba
export interface User {
  id: string;
  name: string;
  email: string; 
  career: string; 
  semester: number;
  avatarUrl?: string;
  bio?: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  content: string; 
  imageUrl?: string;
  createdAt: string;
  likesCount: number; 
  commentsCount: number;
}

export interface Group {
  id: string;
  name: string; 
  description: string;
  membersCount: number;
}