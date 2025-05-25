import BlogArticleContainer from '@/containers/BlogArticleContainer/BlogArticleContainer';
import { BLOG_ARTICLES } from '@/data/blog/Articles';

export default function BlogArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const article = BLOG_ARTICLES.find((article) => article.id === id) ?? null;
  return <BlogArticleContainer article={article} />;
}
