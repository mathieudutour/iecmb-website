import Image from "next/image";
import {
  Microscope,
  MessageCircle,
  Lightbulb,
  ClipboardCheck,
  FileSearch,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDocuments } from "outstatic/server";
import Link from "next/link";

export default async function Home() {
  const objectives = [
    {
      icon: <Microscope className="w-6 h-6 text-green-500" />,
      text: "Développer et partager une connaissance scientifique indépendante des pollutions et polluants, des contaminations qu'ils engendrent et de leurs effets sur la santé des habitants",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      text: "Communiquer les données scientifiques avec transparence et pédagogie",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-500" />,
      text: "Proposer des orientations et des actions concrètes à mettre en œuvre aux structures compétentes",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-green-500" />,
      text: "Évaluer les actions menées par les pouvoirs publics en réponse aux propositions de l'association",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-green-500" />,
      text: "Émettre un avis et des recommandations sur l'efficacité des actions mises en place en lien avec les problèmes de pollutions et de santé du territoire",
    },
  ];

  const { projects, news } = await getData();

  return (
    <main className="flex-grow">
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/images/marc-kargel-qb3Z5BfiAgg-unsplash.jpg"
          alt="Environmental research"
          fill
          className="object-cover absolute z-0"
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Protégeons notre environnement et notre santé
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous développons et partageons des connaissances scientifiques
            indépendantes sur les pollutions et leurs effets sur la santé.
          </p>
          <a
            href="/nous-aider"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Nous Aider
          </a>
        </div>
      </section>
      <section id="objectifs" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Objectifs</h2>
          <ul className="space-y-6">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-4 mt-1">{objective.icon}</div>
                <span>{objective.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Nos Projets</h2>
            <p className="text-lg text-black/70 mb-8">
              Découvrez les projets sur lesquels nous travaillons pour améliorer
              la santé environnementale.
            </p>
            <Link
              href="/projets"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              Voir tous nos projets
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
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

      <section id="actualites" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.slug} className="group bg-black/40">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-4">{item.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href={`/actualites/${item.slug}`}
                    className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Comment Nous Aider</h2>
          <p className="mb-8">
            Votre soutien est crucial pour notre mission. Découvrez comment vous
            pouvez contribuer à notre cause.
          </p>
          <Link
            href="/comment-aider"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Découvrir comment aider
          </Link>
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

  const news = getDocuments("actualites", [
    "title",
    "description",
    "image",
    "slug",
    "publishedAt",
  ]) as unknown as {
    title: string;
    description: string;
    image: string;
    slug: string;
    publishedAt: Date;
  }[];

  return { projects, news };
}
