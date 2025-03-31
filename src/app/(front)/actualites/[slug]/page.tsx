import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getDocumentBySlug, getDocumentSlugs } from "outstatic/server";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { ActualiteCategory } from "@/lib/types";
import { categoryFilters, categoryStyles } from "@/components/NewsCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default async function ActualitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const newsItem = await getData(await params);

  if (!newsItem) {
    return <div>Article non trouvé</div>;
  }

  return (
    <main className="grow py-16 pt-32">
      <article className="container min-h-screen mx-auto px-4">
        <Link
          href="/actualites"
          className="inline-flex items-center text-blue-iec hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux actualités
        </Link>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{newsItem.publishedAt.toDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {newsItem.categories
              .filter((x) => x !== "Événement")
              .map((category) => {
                const styles = categoryStyles[category];
                return (
                  <Badge
                    key={category}
                    variant="secondary"
                    className={cn(
                      "transition-colors",
                      styles?.lightBg,
                      styles?.lightText
                    )}
                  >
                    {categoryFilters.find((f) => f.id === category)?.icon}
                    <span className="ml-1">
                      {categoryFilters.find((f) => f.id === category)?.label}
                    </span>
                  </Badge>
                );
              })}
          </div>
          <Image
            src={newsItem.image || "/placeholder.svg"}
            alt={newsItem.title}
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <div
            className="prose max-w-none mb-8 markdown"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
          <div className="border-t border-gray-200 pt-4 mt-8">
            <p className="text-gray-600">Auteur: {newsItem.author.name}</p>
          </div>
          {/* <div className="flex items-center justify-between mt-8">
            <Link
              href={`/projets/${newsItem.relatedProjects[0]}`}
              className="text-blue-600 hover:underline"
            >
              Voir le projet associé
            </Link>
            <button className="inline-flex items-center text-gray-600 hover:text-gray-800">
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </button>
          </div> */}
        </div>
      </article>
    </main>
  );
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify);

async function getData(params: { slug: string }) {
  const projet = getDocumentBySlug("actualites", params.slug, [
    "title",
    "description",
    "image",
    "slug",
    "content",
    "author",
    "publishedAt",
    "categories",
    "dateEvenement",
  ]);

  if (!projet) {
    return null;
  }

  const content = await processor.process(projet.content || "");

  return {
    ...projet,
    publishedAt: new Date(projet.publishedAt),
    dateEvenement: projet.dateEvenement ? new Date(projet.dateEvenement as string) : null,
    categories: (projet.categories as any)?.map((y: { value: string }) => y.value) ?? [],
    content: content.value,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any as {
    title: string;
    description: string;
    image: string;
    slug: string;
    content: string;
    author: { name: string };
    publishedAt: Date;
    dateEvenement: Date | null;
    categories: ActualiteCategory[];
  };
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("actualites");
  return posts.map((slug) => ({ slug }));
}
