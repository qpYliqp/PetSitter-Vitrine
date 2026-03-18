export interface PhotoData {
  src: string;
  alt: string;
  rot?: number;
}

// Photos optimisées pour le SEO avec des balises "alt" très descriptives
export const galeriePhotos: PhotoData[] = [
  { src: "/illustrations/vignettes/dog8.jpg", alt: "Grand chien sportif qui court joyeusement dans un parc en laisse", rot: -2 },
  { src: "/illustrations/vignettes/dog4.jpg", alt: "Petit chien mignon qui dort paisiblement en garde", rot: 1.5 },
  { src: "/illustrations/vignettes/dog2.jpg", alt: "Chien drôle faisant le pitre dans le jardin de la Pet Sitter", rot: -1 },
  { src: "/illustrations/vignettes/dog-sitter1.jpg", alt: "Sandrine la Pet Sitter qui caresse affectueusement un chien", rot: 3.5 },
  { src: "/illustrations/vignettes/dog3.jpg", alt: "Chien au regard très attentif pendant une promenade en Dordogne", rot: -3 },
  { src: "/illustrations/vignettes/dog4.jpg", alt: "Chien en pleine phase de repos calme dans un panier confortable", rot: 1 },
  { src: "/illustrations/vignettes/bird1.jpg", alt: "Le magnifique perroquet de compagnie gardé à la maison", rot: -2.5 },
  { src: "/illustrations/vignettes/dog-sitter2.jpg", alt: "Ballade sécurisée et promenade pour les grands chiens par la nounou", rot: 4 },
  { src: "/illustrations/vignettes/dog5.jpg", alt: "Portrait de chien souriant et épanoui confié pour le week-end", rot: -1.5 },
];

export const homePhotos: PhotoData[] = [
  { src: "/illustrations/vignettes/dog-bird1.jpg", alt: "Un gentil chien et un petit oiseau devenus amis pendant la pension", rot: -2 },
  { src: "/illustrations/vignettes/dog1.jpg", alt: "Jeune chien adorable jouant dans l'herbe du grand jardin clos", rot: 1.5 },
  { src: "/illustrations/vignettes/dog6.jpg", alt: "Chien se relaxant en intérieur chaleureux chez Sandrine", rot: -1 },
  { src: "/illustrations/vignettes/dog-sitter1.jpg", alt: "Pet sitter au parc en train de surveiller la meute", rot: 3.5 },
  { src: "/illustrations/vignettes/dog3.jpg", alt: "Élégant chien gardé précieusement pendant les vacances de ses maitres", rot: -3 },
  { src: "/illustrations/vignettes/dog4.jpg", alt: "Séjour de détente et câlins assurés pour votre animal de compagnie", rot: 1 },
  { src: "/illustrations/vignettes/bird1.jpg", alt: "Oiseau de compagnie cajolé par la comportementaliste", rot: -2.5 },
  { src: "/illustrations/vignettes/dog-sitter2.jpg", alt: "Garde d'animaux professionnelle sur Périgueux et Mensignac", rot: 4 },
  { src: "/illustrations/vignettes/dog5.jpg", alt: "Portrait d'un chien heureux de son expérience pension", rot: -1.5 },
];
