import {Metadata} from "next";
import {notFound} from "next/navigation";
import markdownToHtml from "@/src/lib/markdownToHtml";
import {getAllPosts, getPostBySlug} from "@/src/lib/api";
import Alert from "@/src/app/_components/alert";
import Header from "@/src/app/_components/header";
import {PostHeader} from "@/src/app/_components/post-header";
import {PostBody} from "@/src/app/_components/post-body";
import {CMS_NAME} from "@/src/lib/constants";
import CommonContainer from "@/src/app/_components/commonContainer";

// params are part of generateStaticParams return value, which is matched with the dynamic route segment.
export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <CommonContainer>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </CommonContainer>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

// The generateStaticParams function can be used in combination with dynamic route segments
// to statically generate routes at build time instead of on-demand at request time.
// used in server-side.
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}