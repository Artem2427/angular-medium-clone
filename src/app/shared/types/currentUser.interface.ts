export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null;
  token: string;
  image: string | null;
}
