import Image from "next/image";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const newsItems: NewsItem[] = [
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
  {
    id: 4,
    title: "Résultats de l'étude sur la pollution sonore",
    excerpt:
      "Notre étude sur la pollution sonore dans les zones urbaines est terminée. Les résultats montrent un impact significatif sur la santé des résidents.",
    date: "10 juillet 2023",
    image: "/elyas-pasban-uAm_c9heHxo-unsplash.jpg",
  },
  {
    id: 5,
    title: "Nouveau partenariat pour la recherche sur l'eau potable",
    excerpt:
      "Nous sommes fiers d'annoncer un nouveau partenariat avec l'Université de Paris pour étudier la qualité de l'eau potable dans la région parisienne.",
    date: "5 août 2023",
    image: "/alexander-schimmeck-YpOhhVGPkyQ-unsplash.jpg",
  },
];

export default function NewsPage() {
  return (
    <main className="flex-grow">
      <section className="py-16 pt-32 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Actualités</h1>
          <div className="space-y-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
