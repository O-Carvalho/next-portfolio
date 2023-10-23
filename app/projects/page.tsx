import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectList } from "../components/pages/projects/projects-list";
import { ProjectsPageData, ProjectsPageStaticData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
    return fetchHygraphQuery(
        query,
        60 * 60 * 24 //24 horas
    )
}

export default async function Projects() {
    const { projects } = await getPageData();

    return (
        <>
        <PageIntroduction />
        <ProjectList projects={projects}/>
        </>
    )
}

export async function generateStaticParams() {
  const query = `
  query ProjectSlugsQuery() {
    projects(first: 100) {
      slug
    }
  }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}