export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

export type User = {
  id: string;
  username: string;
  password: string;
  videosFav: string[];
};

export type videosResponse = {
  videosList: Array<Video & { isFav: boolean }>;
};

export type userResponse = Omit<User, "password">;
