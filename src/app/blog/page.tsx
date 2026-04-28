import Image from "next/image";
import { getAllPosts, getCategoryName } from "@/lib/microcms";
import type { BlogPost } from "@/lib/microcms";
import JsonLd from "@/app/components/JsonLd";

const SITE_URL = "https://mise-route.jp";

function generateBlogListSchemas(posts: BlogPost[]) {
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
    ],
  };

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ブログ | ミセルート",
    description:
      "飲食店の集客・Web活用に役立つ情報をお届けするミセルートのブログです。",
    url: `${SITE_URL}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: "ミセルート",
      url: SITE_URL,
    },
    ...(posts.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: posts.map((post, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/blog/${post.id}`,
          name: post.title,
        })),
      },
    }),
  };

  return [breadcrumb, collectionPage];
}

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="blog-container">
      <JsonLd data={generateBlogListSchemas(posts)} />
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <a href="/">ホーム</a>
        <span className="breadcrumb-sep" aria-hidden="true">/</span>
        <span aria-current="page">ブログ</span>
      </nav>
      <h1 className="blog-page-title">ブログ</h1>
      <p className="blog-page-desc">
        飲食店の集客・Web活用に役立つ情報をお届けします。
      </p>

      {posts.length === 0 ? (
        <div className="blog-empty">
          <p>記事の準備中です。もうしばらくお待ちください。</p>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <a key={post.id} href={`/blog/${post.id}`} className="blog-card">
              <div className="blog-card-thumb">
                {post.eyecatch ? (
                  <Image
                    src={post.eyecatch.url}
                    alt={post.title}
                    width={post.eyecatch.width ?? 800}
                    height={post.eyecatch.height ?? 450}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div className="blog-card-noimage">No Image</div>
                )}
              </div>
              {getCategoryName(post.category) && (
                <span className="blog-card-cat">{getCategoryName(post.category)}</span>
              )}
              <h2 className="blog-card-title">{post.title}</h2>
              {post.description && (
                <p className="blog-card-desc">{post.description}</p>
              )}
              <time className="blog-card-date">
                {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString(
                  "ja-JP"
                )}
              </time>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
