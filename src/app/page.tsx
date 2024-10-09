import {getAllPosts} from "@/src/lib/api";
import CommonContainer from "@/src/app/_components/commonContainer";
import {Intro} from "@/src/app/_components/intro";
import {HeroPost} from "@/src/app/_components/hero-post";
import {MoreStories} from "@/src/app/_components/more-stories";


export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <CommonContainer>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </CommonContainer>
    </main>
  );
}
