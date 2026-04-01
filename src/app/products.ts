export const products = [
  {
    id: 1,
    slug: "rainbow-dream-cake",
    name: "Rainbow Dream Cake",
    badge: "Bestseller",
    description:
      "A magical rainbow cake topped with clouds, stars, and a crescent moon. Slow-rising and scented.",
    longDescription:
      "This enchanting rainbow cake squishy is topped with fluffy clouds, twinkling stars, and a glittering crescent moon. Made with premium slow-rising foam, it returns to its original shape beautifully. Lightly scented with a sweet vanilla fragrance that lasts. Perfect as a stress reliever, desk companion, or gift for someone special.",
    image: "/images/product-1.jpg",
    orderType: "howto" as const,
  },
  {
    id: 2,
    slug: "teddy-bear-sweets",
    name: "Teddy Bear Sweets",
    badge: "New",
    description:
      "An adorable bear surrounded by pastel macarons, cookies, and cupcakes. Irresistibly soft.",
    longDescription:
      "An adorable bear squishy with pastel macarons, heart cookies, and frosted cupcakes. Hand-painted details, slow-rising, and impossibly cute.",
    image: "/images/product-2.png",
    orderType: "deposit" as const,
  },
  {
    id: 3,
    slug: "starlight-cookies",
    name: "Starlight Cookies",
    badge: "Popular",
    description:
      "Star and heart-shaped cookie squishies with rainbow sprinkles and glitter details.",
    longDescription:
      "A dreamy collection of star, heart, and moon-shaped cookie squishies decorated with rainbow sprinkles and iridescent glitter. Each piece catches the light beautifully. Made with ultra-soft, slow-rising foam and scented with a gentle sugar cookie fragrance. Collect them all or mix and match your favorites.",
    image: "/images/product-3.png",
    orderType: "livecheckout" as const,
  },
  {
    id: 4,
    slug: "colourful-squishy",
    name: "Colourful Squishy",
    badge: "Limited",
    description:
      "Colorful and fun dinosaur squishy set with vibrant pastel tones. Soft, slow-rising, and eye-catching.",
    longDescription:
      "A playful squishy set featuring a vibrant dinosaur figure with colorful foam shapes. Soft to the touch, slow-rising, and perfect for collectors who love bold pastel colors.",
    image: "/images/product-4.jpg",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
