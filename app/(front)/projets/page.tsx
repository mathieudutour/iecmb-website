import Image from "next/image";
import { getDocuments } from "outstatic/server";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function ProjectsPage() {
  const { projects } = await getData();

  return (
    <main className="flex-grow">
      <section className="py-16 pt-32 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Nos Projets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.slug} className="group bg-white/80">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    variant="outline"
                    className={`absolute top-4 right-4 ${
                      project.etat === "En cours"
                        ? "border-green-500 text-green-500"
                        : "border-blue-500 text-blue-500"
                    }`}
                  >
                    {project.etat === "En cours" ? (
                      <Clock className="w-3 h-3 mr-1" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    )}
                    {project.etat}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="text-black/70 mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href={`/projets/${project.slug}`}
                    className="inline-flex items-center text-sm text-black/80 hover:text-black transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

async function getData() {
  const projects = (
    getDocuments("projets", [
      "title",
      "description",
      "etat",
      "image",
      "slug",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ]) as any
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((x: any) => ({ ...x, etat: x.etat[0].value })) as {
    title: string;
    description: string;
    etat: string;
    image: string;
    slug: string;
  }[];

  return { projects };
}
