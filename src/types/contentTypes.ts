export interface BlogListType {
  id: number;
  cover_image?: string;
  title: string;
  date: string;
  description: string;
}
export interface BlogDetailType {
  id: number;
  title: string;
  cover_image: string;
  date: string;
  author_image: string;
  author_name: string;
  read_min: string;
  youtube_link: string;
  description: string;
  content: string;
}
export type FetchBlogDetailResult = {
  loading: boolean;
  data: BlogDetailType | null;
  error: string | null;
};
export interface ProjectType {}
export interface SeoProjectType {}

export interface ProjectImageInterface {
  image: string;
}

export interface ProjectsInterface {
  [key: string]: ProjectImageInterface[];
}

export interface LinkInterface {
  label: string;
  value: string;
}
