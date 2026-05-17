import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "La Belle Pâtisserie",
    tagline: "Handcrafted cakes & patisserie from Nottingham",
    description:
      "Every cake is made to order in our Nottingham kitchen — layered, decorated, and delivered with care. From celebration tiers to everyday indulgences, we bake with the finest ingredients and a little extra love.",
    email: "hello@labellepatisserie.co.uk",
    location: "Nottingham, East Midlands",
    foundedYear: 2018,
    socialInstagram: "https://instagram.com/labellepatisserie",
    socialFacebook: "https://facebook.com/labellepatisserie",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "5,000+", label: "Cakes Made" },
    { value: "200+", label: "Designs" },
    { value: "4.9★", label: "Average Rating" },
    { value: "Est. 2018", label: "Nottingham" },
  ],
};

export default config;
