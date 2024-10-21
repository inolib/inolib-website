import type { Metadata } from "next";

import { Link } from "~/components/app/(pages)";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Mentions légales | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Mentions légales</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <div className="flex max-w-prose flex-col gap-8">
        <p>
          Merci de lire attentivement les modalités d’utilisation du site avant de parcourir ses pages. En vous
          connectant sur ce site, vous acceptez sans réserve les présentes conditions. Conformément à l’article nº 6 de
          la Loi nº 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, les responsables du site
          internet <Link href="https://www.inolib.com">www.inolib.com</Link> sont :
        </p>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Éditeur du site</HeadingContent>
          </Heading>

          <div>
            <p>Société : INOLIB SAS</p>
            <p>Numéro de SIRET : 909 129 454 00015</p>
            <p>Responsable éditorial : Djebrine ALOUI</p>
            <p>Forme juridique : Société par actions simplifiée (SAS) au capital de 5 000 €</p>
            <p>
              Siège social : <Link href="https://maps.app.goo.gl/Qbw96fkcBgLsKqUr5">254 rue Vendôme 69003 Lyon</Link>
            </p>
            <p>Immatriculation : RCS de Lyon sous le numéro B 909 129 454</p>
            <p>Numéro de TVA intracommunautaire : FR89909129454</p>
            <p>
              Numéro de téléphone : <Link href="tel:+33647218669">+33 6 47 21 86 69</Link>
            </p>
            <p>
              Adresse e-mail : <Link href="mailto:contact@inolib.com">contact@inolib.com</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Hébergement</HeadingContent>
          </Heading>

          <div>
            <p>Le site est hébergé en France par :</p>
            <p>Société : o2switch</p>
            <p>
              Adresse :{" "}
              <Link href="https://maps.app.goo.gl/nWbs1WK7DQLE13fW6">Chemin des Pardiaux 63000 Clermont-Ferrand</Link>
            </p>
            <p>
              Numéro de téléphone : <Link href="tel:+33444446040">+33 4 44 44 60 40</Link>
            </p>
            <p>
              Site web : <Link href="https://www.o2switch.fr">https://www.o2switch.fr</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Service clients</HeadingContent>
          </Heading>

          <div>
            <p>
              Numéro de téléphone : <Link href="tel:+33647218669">+33 6 47 21 86 69</Link>
            </p>
            <p>Horaires d’ouverture : du lundi au vendredi de 9 h à 12 h et de 14 h à 18 h</p>
            <p>
              Adresse : <Link href="https://maps.app.goo.gl/Qbw96fkcBgLsKqUr5">254 rue Vendôme 69003 Lyon</Link>
            </p>
            <p>
              Adresse e-mail : <Link href="mailto:contact@inolib.com">contact@inolib.com</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Conditions d’utilisation</HeadingContent>
          </Heading>

          <p>
            La société INOLIB met tout en œuvre pour fournir une information fiable et actualisée. Toutefois, des
            erreurs ou omissions peuvent survenir. Il est conseillé à l’internaute de vérifier l’exactitude des
            informations auprès d’INOLIB et de signaler toute modification jugée utile. INOLIB ne saurait être tenue
            responsable de l’utilisation des informations fournies ni de tout dommage direct ou indirect pouvant en
            découler.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Liens hypertextes</HeadingContent>
          </Heading>

          <p>
            Le site <Link href="https://www.inolib.com">www.inolib.com</Link> peut proposer des liens vers d’autres
            sites ou ressources disponibles sur internet. INOLIB ne contrôle pas ces sites externes et n’est pas
            responsable de leur disponibilité ni de leur contenu. L’internaute est seul responsable des risques liés à
            leur utilisation et doit se conformer à leurs conditions d’utilisation.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Propriété intellectuelle</HeadingContent>
          </Heading>

          <p>
            Le contenu du site <Link href="https://www.inolib.com">www.inolib.com</Link> (incluant, sans s’y limiter,
            les graphismes, textes, images, vidéos, sons, logos, et icônes) est la propriété exclusive d’INOLIB. Toute
            reproduction, distribution, modification, ou publication de ces éléments sans l’accord d’INOLIB est
            strictement interdite.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Litiges</HeadingContent>
          </Heading>

          <p>
            Les présentes conditions sont régies par le droit français. Tout litige relatif à l’utilisation du site
            <Link href="https://www.inolib.com">www.inolib.com</Link> sera de la compétence exclusive des tribunaux dont
            dépend le siège social de la société INOLIB.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Données personnelles</HeadingContent>
          </Heading>

          <p>
            En règle générale, vous n’êtes pas tenu de nous fournir vos données personnelles lorsque vous visitez notre
            site <Link href="https://www.inolib.com">www.inolib.com</Link>. Toutefois, pour certains services, vous
            pouvez être amené à fournir des informations telles que votre nom, votre adresse mail et votre numéro de
            téléphone.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Page;
