import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';
import TagComponent from '@/components/TagComponent/TagComponent';
import TitleComponent from '@/components/titleComponent/TitleComponent';
import { basePath } from '@/config/config';
import { BLOG_ARTICLES } from '@/data/blog/Articles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AllBlogsArticlesSection() {
  const truncateDescription = (description: string) => {
    return description.length > 150
      ? description.substring(0, 150) + '...'
      : description;
  };
  return (
    <section className="section_style bg-gradient-to-b from-background via-primaryColor to-secondaryColor">
      <div className="flex flex-col gap-y-28">
        <div className="flex flex-col gap-y-5 items-center">
          <TitleComponent text="Artículos del Blog" />
          <SubtitleComponent
            text="Aquí puedes leer todas las entradas de mi blog, donde escribo sobre investigaciones, experiencias y ayudas para mejorar en el día a día."
            className="text-center"
          />
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          {BLOG_ARTICLES.map((article, index) => (
            <div
              key={index}
              className="flex flex-row bg-background px-10 py-8 rounded-lg shadow-xl w-full"
            >
              <div className="w-full flex flex-col gap-y-5">
                <div>
                  <Link
                    href={article.link}
                    className="hover:opacity-80 duration-300"
                  >
                    <h2 className="text-2xl font-bold">{article.title}</h2>
                  </Link>
                  <p className="text-sm">
                    {article.author} - {article.date}
                  </p>
                </div>
                <div className="flex flex-row gap-x-2 gap-y-4 flex-wrap">
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
                <p>{truncateDescription(article.content)}</p>
                <div className="flex flex-row w-full justify-center h-full items-end">
                  <PrimaryButtonComponent
                    text="LEER MAS"
                    link
                    url={article.link}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
