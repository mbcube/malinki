import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";
import {
  getBlogAuthor,
  parsePublishedAt,
  resolveCoverImageUrl,
} from "@/lib/blog";

export const GET: APIRoute = async (context) => {
  const lang = "fr" as const;
  const siteUrl = (context.site?.href || "https://malinki.ca").replace(
    /\/$/,
    "",
  );
  const { data: seo } = (await getEntry("seo", lang))!;


  const posts = (await getCollection("blog"))
    .filter((p) => p.id.startsWith(`${lang}/`) && !p.data.noIndex)
    .sort((a, b) => {
      const dateA = parsePublishedAt(a.data.publishedAt);
      const dateB = parsePublishedAt(b.data.publishedAt);
      if (!dateA || !dateB) return 0;
      return dateB.getTime() - dateA.getTime();
    });

  return rss({
    title: seo.blog_title,
    description: seo.blog_description,
    site: siteUrl,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
      dc: "http://purl.org/dc/elements/1.1/",
    },
    customData: [
      `<language>fr-CA</language>`,
      `<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
    ].join(""),
    items: posts.map((post) => {
      const pubDate = parsePublishedAt(post.data.publishedAt) ?? new Date();
      const link = `/blog/${post.data.slug}/`;
      const cover = resolveCoverImageUrl(post.data.coverImage, siteUrl);
      const author = getBlogAuthor(post.data.author) || "Malinki";
      const customBits = [
        `<dc:creator><![CDATA[${author}]]></dc:creator>`,
        cover ? `<media:content url="${cover}" medium="image" />` : "",
      ].filter(Boolean);

      return {
        title: post.data.seoTitle || post.data.title,
        description: post.data.seoDescription || post.data.excerpt,
        pubDate,
        link,
        customData: customBits.join(""),
      };
    }),
  });
};
