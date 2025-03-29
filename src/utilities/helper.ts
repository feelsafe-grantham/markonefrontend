export const generateBlogSlug = (id: number, title: string) => {
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  return `/${slug}-${id}`;
};
export const getIdFromSlug = (slug: string): number | null => {
  const id = slug.split("-").pop();
  return id ? parseInt(id) : null;
};
