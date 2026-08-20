import React from "react";
import {
  json,
  redirect,
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
import { fetchPortfolioFromCMS } from "../services/cms";
import { seoKeywords } from "../utils/seo";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Slug Parameter Required", { status: 400 });
  }

  const projects = await fetchPortfolioFromCMS();

  // Find project by slug
  let project = projects.find((p) => p.slug === slug);
  let shouldRedirect = false;

  // Backward compatibility: If not found by primary slug, search by legacy numeric ID or documentId
  if (!project) {
    project = projects.find(
      (p) => p.legacyId === slug || p.id === slug || p.cmsId === slug,
    );
    if (project) {
      shouldRedirect = true;
    }
  }

  if (!project) {
    throw new Response("Project Not Found", { status: 404 });
  }

  // If matched a legacy route, redirect to canonical slug URL (301 Permanent Redirect)
  if (shouldRedirect) {
    return redirect(`/portfolio/${project.slug}`, { status: 301 });
  }

  return json({ project, allProjects: projects });
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
    {
      tagName: "link",
      rel: "canonical",
      href: `https://maanasatemplearch.com/portfolio/${project.slug}`,
    },
  ];
};

export default function PortfolioDetail() {
  const { project, allProjects } = useLoaderData<typeof loader>();

  return (
    <div className="page" style={{ backgroundColor: "#fbf9f4" }}>
      <Navbar />
      <main>
        <DetailHero project={project} />
        <ProjectOverview project={project} />
        <EditorialGallery project={project} />
        <RelatedProjects project={project} allProjects={allProjects} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
