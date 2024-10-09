import fs from "fs";
import matter from "gray-matter";
import {join} from "path";
import {Post} from "@/src/interfaces/post";

export function getPostSlugs() {
  // return all the files name in the _posts directory: [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
  return fs.readdirSync(join(process.cwd(), "_posts"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(join(process.cwd(), "_posts"), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // the front matter will be transfer as data, while the content below will be transfer as content
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
      .map((slug) => getPostBySlug(slug))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
