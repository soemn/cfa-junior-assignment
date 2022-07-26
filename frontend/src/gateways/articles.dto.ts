export type Article = {
  total: number;
  posts: {
    id: number;
    authorName: string;
    postTitle: string;
    postDescription: string;
    postImgSrc: string;
    updatedAt: string;
    createdAt: string;
  }[];
};
