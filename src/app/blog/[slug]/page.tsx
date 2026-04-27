import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts, getPostById, getCategoryName } from "@/lib/microcms";
import JsonLd from "@/app/components/JsonLd";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostById(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description ?? `${post.title} | ミセルート ブログ`,
    openGraph: {
      title: post.title,
      description: post.description ?? `${post.title} | ミセルート ブログ`,
      type: "article",
      images: post.eyecatch
        ? [{ url: post.eyecatch.url, width: post.eyecatch.width, height: post.eyecatch.height }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const SITE_URL = "https://mise-route.jp";

function generateBlogDetailSchemas(post: NonNullable<Awaited<ReturnType<typeof getPostById>>>) {
  const categoryName = getCategoryName(post.category);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ブログ",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.id}`,
      },
    ],
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description ?? post.title,
    datePublished: post.publishedAt ?? post.createdAt,
    dateModified: post.updatedAt ?? post.publishedAt ?? post.createdAt,
    author: {
      "@type": "Organization",
      name: "ミセルート",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ミセルート",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    ...(post.eyecatch && { image: post.eyecatch.url }),
    ...(categoryName && { articleSection: categoryName }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.id}`,
    },
  };

  return [breadcrumb, blogPosting];
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostById(slug);

  if (!post) {
    return (
      <div className="blog-container">
        <p>記事が見つかりません。</p>
      </div>
    );
  }

  return (
    <article className="blog-container blog-article">
      <JsonLd data={generateBlogDetailSchemas(post)} />

      {getCategoryName(post.category) && (
        <span className="blog-article-cat">{getCategoryName(post.category)}</span>
      )}
      <h1 className="blog-article-title">{post.title}</h1>
      <time className="blog-article-date">
        {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("ja-JP")}
      </time>

      {post.eyecatch && (
        <div className="blog-article-hero">
          <Image
            src={post.eyecatch.url}
            alt={post.title}
            width={post.eyecatch.width ?? 1200}
            height={post.eyecatch.height ?? 630}
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            priority
          />
        </div>
      )}

      <div
        className="blog-article-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="blog-article-back">
        <a href="/blog">← 記事一覧に戻る</a>
      </div>
    </article>
  );
}
