export type Routes = Record<
  string,
  {
    isActive: boolean;
    title: string;
  }
>;

export const useRoutes = (): Routes => ({
  "/": {
    isActive: true,
    title: "Accueil",
  },
  "/a-propos": {
    isActive: true,
    title: "À propos",
  },
  "/accompagnement": {
    isActive: false,
    title: "Accompagnement",
  },
  "/accompagnement/accompagnement-de-projet": {
    isActive: true,
    title: "Accompagnement de projet",
  },
  "/accompagnement/accompagnement-technique": {
    isActive: true,
    title: "Accompagnement technique",
  },
  "/actualites": {
    isActive: true,
    title: "Actualités",
  },
  "/audit": {
    isActive: false,
    title: "Audit",
  },
  "/audit/audit-de-conformite": {
    isActive: true,
    title: "Audit de conformité",
  },
  "/audit/tests-utilisateurs": {
    isActive: true,
    title: "Tests utilisateurs",
  },
  "/certificat-qualiopi": {
    isActive: true,
    title: "Certification Qualiopi",
  },
  "/contact": {
    isActive: true,
    title: "Contact",
  },
  "/contact/rendez-vous": {
    isActive: true,
    title: "Rendez-vous",
  },
  "/developpement": {
    isActive: true,
    title: "Développement web et mobile",
  },
  "/developpement/sites-vitrines-et-institutionnels": {
    isActive: true,
    title: "Sites vitrines et institutionnels",
  },
  "/inolib-academy": {
    isActive: true,
    title: "INOLIB Academy",
  },
  "/mentions-legales": {
    isActive: true,
    title: "Mentions légales",
  },
  "/plan-du-site": {
    isActive: true,
    title: "Plan du site",
  },
});
