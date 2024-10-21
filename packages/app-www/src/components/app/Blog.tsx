import { Blog as BaseBlog } from "~/components/blog";
import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const Blog = () => {
  return (
    <Section className="flex flex-col gap-24" id="blog" tabIndex={-1}>
      <div className="flex items-center justify-between gap-8">
        <Heading _alignment="left" _size="4xl">
          <HeadingContent _level={2}>Nos dernières actualités</HeadingContent>
        </Heading>

        <Link _color="blue-900" _shape="button" className="hidden md:flex" href="/actualites">
          Voir tous les articles
        </Link>
      </div>

      <BaseBlog _count={3} _headingLevel={3} />

      <Link _color="blue-900" _shape="button" className="self-center md:hidden" href="/actualites">
        Voir tous les articles
      </Link>
    </Section>
  );
};
