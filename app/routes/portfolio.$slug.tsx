import React from "react";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailHero from "../components/Portfolio/DetailHero/DetailHero";
import ProjectOverview from "../components/Portfolio/ProjectOverview/ProjectOverview";
import EditorialGallery from "../components/Portfolio/EditorialGallery/EditorialGallery";
import RelatedProjects from "../components/Portfolio/RelatedProjects/RelatedProjects";
import CTASection from "../components/Portfolio/CTASection/CTASection";
import { getProjectBySlug } from "../data/portfolio";
import { seoKeywords } from "../utils/seo";

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
      content: `${project.summary} Learn about the Agama compliance and Dravidian architecture of ${project.title}.`,
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
        <RelatedProjects project={project} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
