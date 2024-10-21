import type { Metadata } from "next";

import { Link } from "~/components/app/(pages)";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Certificat Qualiopi | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Certificat Qualiopi d’INOLIB</HeadingContent>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>
              La certification qualité Qualiopi a été délivrée le 07/10/2024, au titre de la catégorie d’action
              suivante : actions de formation.
            </p>

            <p>Ce certificat, délivré par Alticert, est valide jusqu’au 06/10/2027.</p>

            <p>
              <Link href="/assets/certificat-qualiopi-inolib-2024.pdf">
                Télécharger le certificat Qualiopi d’INOLIB (PDF, 280 Ko)
              </Link>
              .
            </p>

            <p>La transcription accessible de ce certificat se trouve ci-après.</p>
          </div>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <div className="flex max-w-prose flex-col gap-8 self-center">
        <Heading _alignment="center" _size="2xl">
          <HeadingContent _level={2}>Certificat</HeadingContent>
        </Heading>

        <div className="text-center">
          <p className="font-bold">INOLIB</p>
          <p>254 RUE VENDOME, 69003 LYON</p>
        </div>

        <p className="text-center">
          Pour ses activités de formation professionnelle, (article L6313-1 du code du travail).
        </p>

        <p className="text-center">Exclusion : Aucune.</p>

        <div>
          <p>
            ALTICERT a évalué les activités de formation professionnelle, (déclaration d’activité enregistrée sous le
            NDA nº 84692290269 – Nº Siren 909129454), et atteste de leur conformité aux :
          </p>

          <UnorderedList className="pl-8">
            <UnorderedListItem>décret 2019-564 relatif à la qualité des actions de la formation ;</UnorderedListItem>
            <UnorderedListItem>
              décret 2019-565 relatif au référentiel national sur la qualité des actions concourant au développement des
              compétences ;
            </UnorderedListItem>
            <UnorderedListItem>
              arrêté du 06 juin 2019 relatif aux modalités d’audit associées au référentiel national mentionné à
              l’article D. 6316-1-1 du code du travail ;
            </UnorderedListItem>
            <UnorderedListItem>
              guide de lecture du référentiel national Qualité dans sa version en vigueur ;
            </UnorderedListItem>
            <UnorderedListItem>
              à la procédure de certification ALTICERT PR_002 dans sa version en vigueur ;
            </UnorderedListItem>
            <UnorderedListItem>
              arrêté du 31 mai 2023 portant diverses mesures en matière de certification qualité des organismes de
              formation.
            </UnorderedListItem>
          </UnorderedList>
        </div>

        <div>
          <p>N° d’enregistrement du certificat : 2024-281-01.</p>
          <p>Date de début de certification : 07/10/2024.</p>
          <p>
            Certificat valable du 07/10/2024 au 06/10/2027, sous réserve d’une surveillance entre le 14<sup>ème</sup> et
            le 22<sup>ème</sup> mois du cycle de 3 ans.
          </p>
        </div>

        <div>
          <p>À Lyon, le 07/10/2024.</p>
          <p>Marc GEHLKOPF</p>
          <p>p.o Responsable Certification</p>
        </div>

        <div>
          <p>COFRAC : Certification de produits et de services</p>
          <p>Accréditation nº 5-0637.</p>
          <p>
            Portée disponible sur <Link href="https://www.cofrac.fr">www.cofrac.fr</Link>.
          </p>
        </div>

        <p>
          Ce document est la propriété d’ALTICERT SARL. Il doit être restitué sur simple demande. Seul l’original signé
          est valable.
        </p>

        <p>
          ALTICERT SARL – Capital 3 000 € – 6 Bd des Belges 69006 Lyon –{" "}
          <Link href="https://www.alticert.fr">www.alticert.fr</Link>
        </p>

        <p>EN 014 version 14/10/2023</p>
      </div>
    </Section>
  );
};

export default Page;
