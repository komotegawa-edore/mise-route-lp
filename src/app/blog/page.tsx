import Image from "next/image";
import { getAllPosts } from "@/lib/microcms";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="blog-container">
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
              {post.category && (
                <span className="blog-card-cat">{post.category}</span>
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
