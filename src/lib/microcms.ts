import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type BlogCategory = {
  id: string;
  name: string;
} & MicroCMSListContent;

export type BlogPost = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  description?: string;
  category?: BlogCategory | string;
} & MicroCMSListContent;

export function getCategoryName(category?: BlogCategory | string): string | undefined {
  if (!category) return undefined;
  if (typeof category === "string") return category;
  return category.name;
}

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

const isConfigured = serviceDomain !== "" && apiKey !== "";

const client = isConfigured
  ? createClient({ serviceDomain, apiKey })
  : null;

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) return [];
  try {
    const res = await client.getList<BlogPost>({
      endpoint: "blogs",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    return res.contents;
  } catch {
    return [];
  }
}

export async function getPostById(
  id: string
): Promise<BlogPost | null> {
  if (!client) return null;
  try {
    return await client.get<BlogPost>({ endpoint: "blogs", contentId: id });
  } catch {
    return null;
  }
}
