import type {
  PortfolioProject,
  GalleryItem,
  Testimonial,
  CardLayout,
} from "../data/portfolio";

const CMS_BASE_URL = "https://api.maanasatemplearch.com";

function getMediaUrl(
  mediaObj: any,
  format?: "large" | "medium" | "small" | "thumbnail",
): string {
  if (!mediaObj) return "";
  let urlPath = mediaObj.url;
  if (format && mediaObj.formats?.[format]) {
    urlPath = mediaObj.formats[format].url;
  }
  if (!urlPath) return "";
  return urlPath.startsWith("http") ? urlPath : `${CMS_BASE_URL}${urlPath}`;
}

function richTextToPlain(richText: any): string {
  if (!richText) return "";
  if (typeof richText === "string") return richText;
  if (Array.isArray(richText)) {
    return richText
      .map((block: any) => {
        if (block.children) {
          return block.children.map((child: any) => child.text || "").join("");
        }
        return "";
      })
      .join("\n\n")
      .trim();
  }
  return "";
}

function richTextToParagraphs(richText: any): string[] {
  if (!richText) return [];
  if (typeof richText === "string") return [richText];
  if (Array.isArray(richText)) {
    return richText
      .map((block: any) => {
        if (block.children) {
          return block.children.map((child: any) => child.text || "").join("");
        }
        return "";
      })
      .filter((p) => p.trim() !== "");
  }
  return [];
}

function generateSlug(title: string): string {
  if (!title) return "";
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function fetchPortfolioFromCMS(): Promise<PortfolioProject[]> {
  try {
    const res = await fetch(
      `${CMS_BASE_URL}/api/portfolio?populate[Projects][populate]=*`,
    );
    if (!res.ok) {
      console.error(`CMS API returned status ${res.status}`);
      return [];
    }
    const json = await res.json();
    const projectsList = json?.data?.Projects;
    if (!Array.isArray(projectsList)) {
      console.error(
        "Projects field is missing or not an array in CMS response",
        json,
      );
      return [];
    }

    const normalizedProjects: PortfolioProject[] = [];

    // Pre-calculate slug frequencies to identify duplicates
    const slugCounts = new Map<string, number>();
    projectsList.forEach((project: any) => {
      const title = (project.Project_Title || project.Title || "").trim();
      if (title) {
        const base = generateSlug(title);
        if (base) {
          slugCounts.set(base, (slugCounts.get(base) || 0) + 1);
        }
      }
    });

    projectsList.forEach((project: any, index: number) => {
      const title = (project.Project_Title || project.Title || "").trim();
      if (!title) {
        console.warn(
          `Skipping invalid project at index ${index} due to missing Project_Title.`,
        );
        return;
      }

      const baseSlug = generateSlug(title);
      if (!baseSlug) {
        console.warn(
          `Skipping invalid project at index ${index} due to empty slug derived from title "${title}".`,
        );
        return;
      }

      // Visual card configurations: features feature wide layout on desktop grid
      const layoutSequence: CardLayout[] = [
        "featured",
        "portrait",
        "wide",
        "centered",
      ];
      const aspectSequence = ["21/9", "4/5", "16/10", "16/8"];
      const seqIndex = index % layoutSequence.length;
      const cardLayout = layoutSequence[seqIndex];
      const cardAspectRatio = aspectSequence[seqIndex];

      const docId = project.documentId || String(project.id);

      // Determine final slug with duplicate resolution
      const isDuplicate = (slugCounts.get(baseSlug) || 0) > 1;
      const finalSlug = isDuplicate ? `${baseSlug}-${project.id}` : baseSlug;

      // Gallery mapping
      const gallery: GalleryItem[] = [];
      if (Array.isArray(project.Project_Images)) {
        project.Project_Images.forEach((img: any, idx: number) => {
          if (img && img.url) {
            const w = img.width || 1600;
            const h = img.height || 1000;

            const originalUrl = getMediaUrl(img);
            const largeUrl = img.formats?.large
              ? getMediaUrl(img, "large")
              : "";
            const mediumUrl = img.formats?.medium
              ? getMediaUrl(img, "medium")
              : "";
            const smallUrl = img.formats?.small
              ? getMediaUrl(img, "small")
              : "";

            const srcsetParts: string[] = [];
            if (smallUrl && img.formats?.small?.width)
              srcsetParts.push(`${smallUrl} ${img.formats.small.width}w`);
            if (mediumUrl && img.formats?.medium?.width)
              srcsetParts.push(`${mediumUrl} ${img.formats.medium.width}w`);
            if (largeUrl && img.formats?.large?.width)
              srcsetParts.push(`${largeUrl} ${img.formats.large.width}w`);
            if (originalUrl && w) srcsetParts.push(`${originalUrl} ${w}w`);

            const srcSet =
              srcsetParts.length > 0 ? srcsetParts.join(", ") : undefined;
            const primarySrc = originalUrl || largeUrl || mediumUrl || smallUrl;

            gallery.push({
              src: primarySrc,
              originalSrc: originalUrl,
              srcSet,
              alt: img.alternativeText || `Gallery image of ${title}`,
              caption:
                img.caption ||
                `Fig. ${String(idx + 1).padStart(2, "0")} — Details`,
              aspectRatio: `${w}/${h}`,
              width: w,
              height: h,
            });
          }
        });
      }

      // Testimonial mapping
      let testimonial: Testimonial | undefined = undefined;
      const clientName = (project.Client_Name || "").trim();
      if (clientName) {
        testimonial = {
          name: clientName,
          designation: (project.Client_Designation || "").trim(),
          organization: (project.Client_Company || "").trim(),
          rating: 5,
          content: richTextToPlain(project.Client_Testimonial),
        };
      }

      normalizedProjects.push({
        id: docId,
        slug: finalSlug,
        title,
        status: project.Is_Completed ? "COMPLETED" : "IN_PROGRESS",
        category: (project.Category || "").trim() || "Temple Architecture",
        location: (project.Project_Location || "").trim(),
        country: project.Project_Location
          ? project.Project_Location.split(",").pop().trim()
          : "India",
        heroImage: getMediaUrl(project.Cover_Image, "large"),
        thumbnail: getMediaUrl(project.Cover_Image, "medium"),
        summary: richTextToPlain(project.Short_Description),
        description: richTextToParagraphs(project.Long_Description),
        gallery,
        client: {
          organization: (project.Client_Company || "").trim(),
          location: (project.Project_Location || "").trim(),
          year: (project.Year || "").trim(),
        },
        completionYear: (project.Year || "").trim() || undefined,
        architecture: {
          style: "",
          principles: "",
          material: "",
        },
        relatedSlugs: [],
        testimonial,
        legacyId: String(project.id),
        cmsId: project.documentId || undefined,
        cardLayout,
        cardAspectRatio,
      });
    });

    return normalizedProjects;
  } catch (error) {
    console.error("Error fetching portfolio from CMS:", error);
    return [];
  }
}
