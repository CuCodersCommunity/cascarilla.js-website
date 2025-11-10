import type Testimonial from "../components/landing/Testimonial.astro";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Satoru Iwata",
    role: "Chief Enthusiasm Officer",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "By importing Cascarilla.js, you'll be starting your project on the right foot.",
  },
  {
    id: 2,
    name: "Yukihiro Matsumoto",
    role: "Technical Wizard",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "With Cascarilla.js, you can harness the power of good vibes in your website. From server-side rendering to static sites, our library will get you started on the right path.",
  },
  {
    id: 3,
    name: "Alexis Ohanian",
    role: "Community Ambassador",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "Check your browser's console and see the magic happen. You'll know you've been blessed when our little console message appears, indicating that you're vibing like a true master.",
  },
  {
    id: 4,
    name: "Alejandro Rivera",
    role: "Author",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "You know all this reviews are AI generated... right?",
  },
  {
    id: 5,
    name: "John Resig",
    role: "Code Maestro",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "Cascarilla.js is more than just a library – it's an experience. Do yourself a favor and embrace the power of good vibes in your web development workflow.",
  },
  {
    id: 6 ,
    name: "Cascarilla-kun",
    role: "Mascot in Chief",
    avatar: "/src/assets/user-placeholder.svg",
    quote:
      "Wiiiiiiii...",
  },
]

