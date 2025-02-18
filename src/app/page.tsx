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

import Link from "next/link";

export default function Home() {
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

  const news = [
    {
      id: 1,
      title: "Nouvelle étude sur la qualité de l'air urbain",
      excerpt:
        "Notre dernière étude révèle des niveaux préoccupants de particules fines dans les grandes villes françaises. Découvrez les résultats et nos recommandations.",
      date: "15 mai 2023",
      image: "/kristen-morith-IWpd8KixceA-unsplash.jpg",
    },
    {
      id: 2,
      title: "Conférence sur les effets des microplastiques",
      excerpt:
        "Rejoignez-nous pour une conférence passionnante sur l'impact des microplastiques sur notre santé et l'environnement, animée par des experts reconnus.",
      date: "3 juin 2023",
      image: "/antoine-giret-7_TSzqJms4w-unsplash.jpg",
    },
    {
      id: 3,
      title: "Lancement de notre campagne de sensibilisation",
      excerpt:
        "Nous lançons une nouvelle campagne pour sensibiliser le public aux dangers des perturbateurs endocriniens. Découvrez comment vous pouvez participer.",
      date: "20 juin 2023",
      image: "/marc-kargel-qb3Z5BfiAgg-unsplash.jpg",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Étude sur la qualité de l'air urbain",
      description:
        "Analyse approfondie des polluants atmosphériques dans les grandes villes françaises et leurs effets sur la santé respiratoire.",
      status: "En cours",
      image: "/kristen-morith-IWpd8KixceA-unsplash.jpg",
    },
    {
      id: 2,
      title: "Impact des microplastiques sur la chaîne alimentaire",
      description:
        "Recherche sur la présence de microplastiques dans les produits de la mer et leurs conséquences sur la santé humaine.",
      status: "En cours",
      image: "/antoine-giret-7_TSzqJms4w-unsplash.jpg",
    },
    {
      id: 3,
      title: "Cartographie des pollutions sonores",
      description:
        "Création d'une carte interactive des niveaux de bruit dans les zones urbaines et étude de leurs effets sur le stress et le sommeil.",
      status: "Terminé",
      image: "/elyas-pasban-uAm_c9heHxo-unsplash.jpg",
    },
    {
      id: 4,
      title: "Évaluation des perturbateurs endocriniens dans l'eau potable",
      description:
        "Analyse de la présence de perturbateurs endocriniens dans l'eau du robinet et développement de méthodes de filtration avancées.",
      status: "Terminé",
      image: "/alexander-schimmeck-YpOhhVGPkyQ-unsplash.jpg",
    },
  ];

  return (
    <main className="flex-grow">
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/marc-kargel-qb3Z5BfiAgg-unsplash.jpg"
          alt="Environmental research"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
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
              <Card key={project.id} className="group bg-white/80">
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
                      project.status === "En cours"
                        ? "border-green-500 text-green-500"
                        : "border-blue-500 text-blue-500"
                    }`}
                  >
                    {project.status === "En cours" ? (
                      <Clock className="w-3 h-3 mr-1" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    )}
                    {project.status}
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
                    href={`/projets/${project.id}`}
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
              <Card key={item.id} className="group bg-black/40">
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
                  <p className="text-white/70 mb-4">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href={`/actualites/${item.id}`}
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
