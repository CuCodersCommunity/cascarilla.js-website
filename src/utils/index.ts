export const URLS = {
  acheSearch: "https://www.google.com/search?q=aché",
  githubRepo: "https://github.com/CuCodersCommunity/cascarilla.js.git",
  remoteScript: "https://cdn.jsdelivr.net/gh/CuCodersCommunity/cascarilla.js@script/index.js",
  cuCodersSite: "https://cucoders.dev"
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Satoru Iwata",
    role: "Chief Enthusiasm Officer",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "By importing Cascarilla.js, you'll be starting your project on the right foot.",
  },
  {
    id: 2,
    name: "Yukihiro Matsumoto",
    role: "Technical Geek",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "With Cascarilla.js, you can harness the power of good vibes in your website. From server-side rendering to static sites, our library will get you started on the right path.",
  },
  {
    id: 3,
    name: "Alexis Ohanian",
    role: "Community Ambassador",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "Check your browser's console and see the magic happen. You'll know you've been blessed when our little console message appears, indicating that you're vibing like a true master.",
  },
  {
    id: 4,
    name: "Alejandro Rivera",
    role: "Author",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "You know all this reviews are AI generated... right?",
  },
  {
    id: 5,
    name: "John Resig",
    role: "Code Maestro",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "Cascarilla.js is more than just a library – it's an experience. Do yourself a favor and embrace the power of good vibes in your web development workflow.",
  },
  {
    id: 6 ,
    name: "Cascarilla-kun",
    role: "Mascot in Chief",
    avatar: "profile-picture-placeholder.svg",
    quote:
      "I'm not Bun.",
  },
]

