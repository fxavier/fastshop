"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Accessories"],
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Home",
    subcategories: ["Furniture", "Decor", "Kitchen"],
  },
];

export function CategoryNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/categories/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subcategory}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}