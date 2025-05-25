import TagComponent from '@/components/TagComponent/TagComponent';
import TitleComponent from '@/components/titleComponent/TitleComponent';
import { basePath } from '@/config/config';
import { BlogArticle, BlogArticleImage } from '@/data/blog/Articles';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

interface BlogArticleContainerProps {
  article: BlogArticle | null;
}

export default function BlogArticleContainer({
  article,
}: BlogArticleContainerProps) {
  if (!article) {
    return notFound();
  } else {
    return (
      <main className="container_style">
        <section className="section_style">
          <div>
            <TitleComponent
              text={article.title}
              className="!text-left w-full"
            />
            <div className="flex flex-row gap-x-2 gap-y-4 flex-wrap w-full">
              {article.tags.map((tag) => (
                <TagComponent text={tag} key={article.id + tag} />
              ))}
            </div>
            <Image
              src={`${basePath}images/blog/${article.presentationImage}`}
              alt={article.title}
              width={500}
              height={500}
              className="w-full"
            />
            <p>{article.content}</p>
            {article.images && article.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {article.images.map((image: BlogArticleImage, index) => {
                  return (
                    <div
                      key={image.alt + index}
                      className="flex flex-col gap-y-2"
                    >
                      <div className="overflow-hidden rounded-lg bg-black ">
                        <Image
                          src={`${basePath}images/blog/${image.url}`}
                          alt={image.alt ?? ''}
                          width={500}
                          height={500}
                          className="w-full hover:scale-105 duration-300 cursor-pointer rounded-lg hover:opacity-50"
                        />
                      </div>
                      <span>{image.alt}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
        <div className="w-full relative"></div>
      </main>
    );
  }
}
