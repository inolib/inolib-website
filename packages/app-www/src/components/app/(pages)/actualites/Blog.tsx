import { Blog as BaseBlog } from "~/components/blog";
import { Section } from "~/components/section";

export const Blog = () => {
  return (
    <Section>
      <BaseBlog _count={9} _headingLevel={2} />
    </Section>
  );
};
