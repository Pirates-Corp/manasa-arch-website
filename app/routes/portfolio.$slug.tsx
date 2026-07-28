import React from "react";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  type LinksFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailHero from "../components/Portfolio/DetailHero/DetailHero";
import ProjectOverview from "../components/Portfolio/ProjectOverview/ProjectOverview";
import EditorialGallery from "../components/Portfolio/EditorialGallery/EditorialGallery";
import ConstructionJourney from "../components/Portfolio/ConstructionJourney/ConstructionJourney";
import RelatedProjects from "../components/Portfolio/RelatedProjects/RelatedProjects";
import CTASection from "../components/Portfolio/CTASection/CTASection";
import { getProjectBySlug } from "../data/portfolio";
import { seoKeywords } from "../utils/seo";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Slug Parameter Required", { status: 400 });
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    throw new Response("Project Not Found", { status: 404 });
  }

  return json({ project });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.project) {
    return [
      { title: "Project Not Found | Maanasa Temple Architecture" },
      {
        name: "description",
        content: "The requested temple project details could not be found.",
      },
    ];
  }
  const { project } = data;
  return [
    { title: `${project.title} | Maanasa Temple Architecture` },
    {
      name: "description",
      content: `${project.summary} Learn about the construction journey, Agama compliance, and Dravidian architecture of ${project.title}.`,
    },
    {
      name: "keywords",
      content: `${project.title}, ${project.category}, ${seoKeywords}`,
    },
  ];
};

export default function PortfolioDetail() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="page" style={{ backgroundColor: "#fbf9f4" }}>
      <Navbar />
      <main>
        <DetailHero project={project} />
        <ProjectOverview project={project} />
        <EditorialGallery project={project} />
        <ConstructionJourney project={project} />
        <RelatedProjects project={project} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
