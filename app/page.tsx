import { ProductGrid } from "@/components/product-grid";

const featuredProducts = [
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

export default function Home() {
  return (
    <div className="container py-8">
      <section className="mb-12">
        <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
          <h1 className="mb-4 text-4xl font-bold">Welcome to ModernShop</h1>
          <p className="text-lg">Discover amazing products at great prices</p>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}