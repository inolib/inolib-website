import Image from "next/image";

import { ThreeColumnsFlexLayout, ThreeColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";
import facebookLogo from "#/images/logos/social-networks/facebook.svg?url";
import facebookWhiteLogo from "#/images/logos/social-networks/facebook-white.svg?url";
import linkedinLogo from "#/images/logos/social-networks/linkedin.svg?url";
import linkedinWhiteLogo from "#/images/logos/social-networks/linkedin-white.svg?url";
import xLogo from "#/images/logos/social-networks/x.svg?url";
import xWhiteLogo from "#/images/logos/social-networks/x-white.svg?url";
import youtubeLogo from "#/images/logos/social-networks/youtube.svg?url";
import youtubeWhiteLogo from "#/images/logos/social-networks/youtube-white.svg?url";

export const ContentInfo = () => {
  const menu = [
    {
      label: "Nos services",
      href: "/#services",
    },
    {
      label: "Nous rejoindre",
      href: "/a-propos#jobs",
    },
    {
      label: "À propos",
      href: "/a-propos",
    },
    {
      label: "Mentions légales",
      href: "/mentions-legales",
    },
    {
      label: "Plan du site",
      href: "/plan-du-site",
    },
  ];

  const socialNetworks = [
    {
      label: "INOLIB sur Facebook",
      href: "https://www.facebook.com/people/Inolib/100075572787282",
      src: facebookLogo,
      whiteSrc: facebookWhiteLogo,
    },
    {
      label: "INOLIB sur LinkedIn",
      href: "https://www.linkedin.com/company/inolib",
      src: linkedinLogo,
      whiteSrc: linkedinWhiteLogo,
    },
    {
      label: "INOLIB sur X",
      href: "https://x.com/_inolib",
      src: xLogo,
      whiteSrc: xWhiteLogo,
    },
    {
      label: "INOLIB sur YouTube",
      href: "https://www.youtube.com/channel/UC9yPUJFvQkKsxGeAJ3CJOTg",
      src: youtubeLogo,
      whiteSrc: youtubeWhiteLogo,
    },
  ];

  return (
    <footer role="contentinfo">
      <Section className="flex flex-col gap-16 bg-blue-950 pb-4 font-normal text-blue-300 first-of-type:pt-24">
        <ThreeColumnsFlexLayout className="items-center">
          <ThreeColumnsFlexLayoutColumn className="flex flex-col items-center">
            <nav aria-label="Menu de pied de page">
              <ul className="flex flex-col justify-between gap-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      _color="transparent"
                      _shape="link"
                      className="text-blue-300 focus-visible:outline-blue-300"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ThreeColumnsFlexLayoutColumn>

          <ThreeColumnsFlexLayoutColumn className="flex flex-col items-center gap-4">
            <p>Suivez-nous !</p>

            <ul aria-label="Réseaux sociaux" className="flex gap-4">
              {socialNetworks.map((item, index) => (
                <li key={index}>
                  <Link
                    _color="transparent"
                    _shape="button"
                    className="size-12 p-2 hover:bg-white focus-visible:outline-white [&:hover>:not([data-white])]:block [&:hover>[data-white]]:hidden [&>:not([data-white])]:hidden"
                    href={item.href}
                    title={item.label}
                  >
                    <Image alt={item.label} className="size-fit" src={item.src} />
                    <Image alt={item.label} className="size-fit" src={item.whiteSrc} data-white />
                  </Link>
                </li>
              ))}
            </ul>
          </ThreeColumnsFlexLayoutColumn>

          <ThreeColumnsFlexLayoutColumn className="flex flex-col items-center gap-4">
            <Link
              _color="transparent"
              _shape="link"
              className="h-24 bg-white p-4 focus-visible:outline-white"
              href="/certificat-qualiopi"
              title="Certificat Qualiopi"
            >
              <Image alt="Certificat Qualiopi" className="size-full" src="/images/logos/qualiopi/qualiopi.png" />
            </Link>

            <p className="text-xs max-w-40">
              La certification qualité a été délivrée au titre de la catégorie d’action suivante : actions de formation.
            </p>
          </ThreeColumnsFlexLayoutColumn>
        </ThreeColumnsFlexLayout>

        <div className="flex items-end justify-between">
          <Image alt="" className="h-8 w-fit" src={inolibYellowLogo} />

          <p className="text-neutral-400">© 2024 INOLIB</p>
        </div>
      </Section>
    </footer>
  );
};
