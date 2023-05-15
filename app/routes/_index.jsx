import Card from "../Components/Card";
import { useTranslation } from "react-i18next";

const recipes = [
  {
    id: "1",
    title: "Hakka Noodles",
    description: "Hakka Noodles fused in Indian style",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/3vsTfOlKTonXK5e7MX83Vy/7d5671c521f6441c63ecdd3c382c2b17/IMG_2974.jpg",
      description: "Hakka Noodles Image"
    }
  },
  {
    id: "2",
    title: "Black Bean and Veggie Burritos",
    description: "Delicious and healthy veggie burritos!",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/4oaf0vi232rxojfzHcGrDG/4fabf817205583cf827fccdc93703ca5/IMG_7911.jpg",
      description: "Black Beans and Veggie Burrito image"
    }
  },
  {
    id: "3",
    title: "White Sauce Pasta",
    description: "Delicious Cheesy Pasta",
    coverImage: {
      url: "https://images.ctfassets.net/rsj8wf5a3fox/34dZERDAm5GNzMqGvzcA2i/2e3cd6544f60be12675af72372565ff6/IMG_1586.jpg",
      description: "White Gravy Pasta image"
    }
  },
]

export default function Index() {
  const { t, ready, i18n } = useTranslation();
  if (!ready) return <p>Loading...</p>
  return (
    <div className="flex-grow container mx-auto">
      <h1 className="text-center text-5xl my-8">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              slug={recipe.id}
              image={recipe.coverImage}
            />
          ))
        }
      </div>
    </div>
  );
}
