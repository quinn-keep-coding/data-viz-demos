import fs from "fs";
import matter from "gray-matter";
import {join} from "path";
import {Post} from "@/src/interfaces/post";
import {orderBy} from "lodash";

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(join(process.cwd(), "_posts"), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // the front matter will be transfer as data, while the content below will be transfer as content
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  // use fs.readdirSync to get all the files name in the _posts directory, run in build time
  // however, there is no relationship with getStaticProps
  // return all the files name in the _posts directory: [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
  const slugs = fs.readdirSync(join(process.cwd(), "_posts"));
  return orderBy(slugs.map((slug) => getPostBySlug(slug)), ['date'], ['desc']);
}

export function getTestJson() {
  const fullPath = join(join(process.cwd(),"public"), "jsons/test.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
}