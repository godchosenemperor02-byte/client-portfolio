import { client } from '../../../sanity/sanity';
import Projects from "../components/Projects";

export const revalidate = 60; // ISR for freshness

export default async function ProjectsPage() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "image": thumbnail.asset->url,
    technologies,
  }`;
  const projects = await client.fetch(query);

  return <Projects projects={projects} />;
}