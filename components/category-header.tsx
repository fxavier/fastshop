import { Category } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div
      className="relative h-48 overflow-hidden rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
        <h1 className="text-4xl font-bold">{category.name}</h1>
        {category.description && (
          <p className="mt-2 max-w-2xl text-lg">{category.description}</p>
        )}
      </div>
    </div>
  );
}