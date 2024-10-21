import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { cn, tv } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";
import FileCheckFramedIcon from "#/images/icons/framed/file-check-02.svg";
import FlagFramedIcon from "#/images/icons/framed/flag-03.svg";
import GraduationHatFramedIcon from "#/images/icons/framed/graduation-hat-02.svg";
import TerminalBrowserFramedIcon from "#/images/icons/framed/terminal-browser.svg";
import auditIllustration from "#/images/illustrations/audit.svg?url";
import developmentIllustration from "#/images/illustrations/development.svg?url";
import educationIllustration from "#/images/illustrations/education.svg?url";
import supportIllustration from "#/images/illustrations/support.svg?url";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-24",
  },
  variants: {
    _color: {
      white: {
        sectionClassName: "bg-white",
      },
      "neutral-50": {
        sectionClassName: "bg-neutral-50",
      },
    },
  },
});

type Variants = VariantProps<typeof variants>;

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Services = ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      icon: <FileCheckFramedIcon className="size-12" />,
      title: "Audit de conformité RGAA et WCAG",
      description: (
        <p>
          Nos services d’audit vous aident à identifier les obstacles à l’accessibilité de vos sites et applications.
          Nous vous accompagnons pour assurer votre conformité aux normes RGAA et WCAG. Que ce soit pour répondre aux
          exigences légales ou améliorer l’expérience utilisateur, nous apportons des solutions adaptées à vos besoins.
        </p>
      ),
      link: {
        label: "En savoir plus sur l’audit de conformité",
        href: "/audit/audit-de-conformite",
      },
      illustration: auditIllustration,
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Pilotage de projet et accompagnement technique",
      description: (
        <>
          <p>
            Nous offrons un service complet de pilotage de projet numérique, en intégrant l’accessibilité dès la
            conception et à chaque étape du développement. Notre approche combine gestion de projet et accompagnement
            technique pour garantir la mise en œuvre efficace de l’accessibilité.
          </p>
          <p>
            Nous vous appuyons également dans l’élaboration d’un schéma pluriannuel, vous permettant de planifier et
            structurer vos actions pour assurer une mise en place durable de l’accessibilité numérique.
          </p>
        </>
      ),
      link: {
        label: "En savoir plus sur l’accompagnement de projet",
        href: "/accompagnement/accompagnement-de-projet",
      },
      illustration: supportIllustration,
    },
    {
      icon: <TerminalBrowserFramedIcon className="size-12" />,
      title: "Développement de solutions web et mobiles",
      description: (
        <p>
          Chez INOLIB, nous transformons vos idées en solutions numériques sur mesure. Que ce soit pour des sites web,
          des applications mobiles ou des logiciels SaaS, notre équipe pluridisciplinaire vous accompagne à chaque étape
          de votre projet, de la conception à la mise en ligne, pour des solutions accessibles, performantes et
          modernes.
        </p>
      ),
      link: {
        label: "En savoir plus sur nos services de développement",
        href: "/developpement",
      },
      illustration: developmentIllustration,
    },
    {
      icon: <GraduationHatFramedIcon className="size-12" />,
      title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique",
      description: (
        <>
          <p>
            En tant que centre de formation certifié Qualiopi, INOLIB Academy vous propose des programmes variés pour
            développer les compétences essentielles aux métiers du numérique et en accessibilité numérique. Nos
            formations, conçues pour s’adapter à tous les niveaux et profils, permettent à vos équipes de monter en
            compétences et d’optimiser leurs projets, tout en répondant aux exigences actuelles du marché.
          </p>
          <p>
            Disponibles en présentiel ou en ligne, nos formations vous offrent flexibilité et expertise, pour des
            services numériques performants et inclusifs.
          </p>
        </>
      ),
      link: {
        label: "En savoir plus sur INOLIB Academy",
        href: "/inolib-academy",
      },
      illustration: educationIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()} id="services" tabIndex={-1}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Découvrez nos services proposés autour de l’accessibilité numérique</HeadingContent>
      </Heading>

      {services.map((item, index) => (
        <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": index % 2 === 0 })} key={index}>
          <TwoColumnsFlexLayoutColumn className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              {item.icon}

              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{item.title}</HeadingContent>
              </Heading>

              {item.description}
            </div>

            <Link _border="black" _color="white" _shape="button" aria-label={item.link.label} href={item.link.href}>
              <span>En savoir plus</span>
              <ArrowNarrowRightIcon className="stroke-black" />
            </Link>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
            <Image alt="" className="h-96" src={item.illustration} />
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>
      ))}
    </Section>
  );
};
