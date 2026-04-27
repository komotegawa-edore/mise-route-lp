import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/microcms";

export const dynamic = "force-static";

const SITE_URL = "https://mise-route.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
