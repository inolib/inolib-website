import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const Jobs = () => {
  return (
    <Section className="flex flex-col items-center gap-24 bg-sand-50" id="jobs" tabIndex={-1}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Rejoindre notre équipe</HeadingContent>
        <HeadingSubheading>Envoyez-nous votre candidature spontanée.</HeadingSubheading>
      </Heading>

      <Link _color="blue-900" _shape="button" href="/contact">
        Nous contacter
      </Link>
    </Section>
  );
};
