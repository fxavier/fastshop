import { Product, Category } from "@/lib/types";

const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Latest electronic gadgets and devices",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
  },
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    description: "Trendy fashion items for all",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  },
];

const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    compareAtPrice: 349.99,
    categoryId: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
    ],
    attributes: {
      color: "Black",
      connectivity: "Bluetooth 5.0",
    },
    stock: 50,
    sku: "WH-1000XM4",
    currency: "USD",
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    slug: "smart-watch-series-x",
    description: "Advanced smartwatch with health tracking features",
    price: 399.99,
    categoryId: "electronics",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
    ],
    attributes: {
      color: "Space Gray",
      size: "44mm",
    },
    stock: 35,
    sku: "SW-X44",
    currency: "USD",
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop Pro",
    slug: "ultra-slim-laptop-pro",
    description: "Powerful and portable laptop for professionals",
    price: 1299.99,
    compareAtPrice: 1499.99,
    categoryId: "electronics",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    ],
    attributes: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
    stock: 20,
    sku: "LP-PRO-512",
    currency: "USD",
  },
];

interface GetProductsOptions {
  categoryId?: string;
  sort?: string;
  price?: string;
  attributes?: string;
}

export async function getProducts(options: GetProductsOptions = {}) {
  let filteredProducts = [...products];

  if (options.categoryId) {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoryId === options.categoryId
    );
  }

  if (options.sort) {
    switch (options.sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  if (options.price) {
    const [min, max] = options.price.split("-").map(Number);
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  return filteredProducts;
}

export async function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug) || null;
}

export async function getProduct(slug: string) {
  return products.find((product) => product.slug === slug) || null;
}