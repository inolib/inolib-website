"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Badge } from "~/components/badge";
import { Heading, type HeadingProps } from "~/components/headless";
import { Link } from "~/components/link";
import { date } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";

const fetchPosts = async (count: number) => {
  const response = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/posts?per_page=${count}&_embed`);

  if (!response.ok) {
    throw new Error("An error occurred");
  }

  return (await response.json()) as Post[];
};

type Post = {
  content: {
    rendered: string;
  };
  date: string;
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  _embedded: {
    author: Array<{
      name: string;
    }>;
    "wp:featuredmedia": Array<{
      alt_text: string;
      media_details: {
        sizes: {
          full: {
            height: number;
            source_url: string;
            width: number;
          };
        };
      };
    }>;
    "wp:term": Array<
      Array<{
        name: string;
      }>
    >;
  };
};

type BlogProps = {
  _count: number;
  _headingLevel: HeadingProps["_level"];
};

export const Blog = ({ _count, _headingLevel }: BlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    void (async () => {
      setPosts(await fetchPosts(_count));
    })();
  }, [_count]);

  return (
    <div className="grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-16">
      {posts.map((item) => {
        const author = item._embedded.author[0].name;
        const categories = item._embedded["wp:term"][0].map((term) => term.name);
        const image = item._embedded["wp:featuredmedia"][0];

        return (
          <div className="flex flex-col gap-4" key={item.id}>
            <div className="aspect-thumbnail flex w-full items-center justify-center overflow-hidden rounded-3xl">
              <Image
                alt=""
                height={image.media_details.sizes.full.height}
                src={image.media_details.sizes.full.source_url}
                width={image.media_details.sizes.full.width}
              />
            </div>

            <ul className="flex gap-4">
              {categories.map((item, index) => (
                <li key={index}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>

            <Heading _level={_headingLevel} className="text-2xl font-bold">
              <Link
                _color="transparent"
                _shape="link"
                className="text-left focus-visible:outline-black"
                dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                href={`/actualites/${item.slug}`}
              />
            </Heading>

            <div
              className="line-clamp-3 [&>*:not(:first-child)]:hidden"
              dangerouslySetInnerHTML={{ __html: item.content.rendered }}
            />

            <Link _border="black" _color="white" _shape="button" href={`/actualites/${item.slug}`}>
              <span>Lire l’article</span>
              <ArrowNarrowRightIcon className="stroke-black" />
            </Link>

            <div>
              <p className="font-bold">{author}</p>
              <p>{date(item.date)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
