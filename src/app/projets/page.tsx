import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  status: "En cours" | "Terminé";
  image: string;
};

const projects: Project[] = [
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

export default function ProjectsPage() {
  return (
    <main className="flex-grow">
      <section className="py-16 pt-32 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Nos Projets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "En cours"
                        ? "bg-green-200 text-green-800"
                        : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
