export const faqs = [
  {
    question: "Où se trouve votre pension pour chien en Dordogne ?",
    answer: "Ma maison familiale et son terrain clos sont situés à Mensignac (24520), en Dordogne. C'est à 20 minutes seulement de Périgueux et facile d'accès pour déposer votre animal."
  },
  {
    question: "Quels types d'animaux prenez-vous en gardiennage ?",
    answer: "Je suis spécialisée dans la garde de chiens, mais forte de mon expérience et de ma certification ACACED."
  },
  {
    question: "Avez-vous des box pour la pension canine ?",
    answer: "Absolument pas ! Je propose une garde 100% à domicile. Vos chiens vivent avec moi dans la maison ou gambadent librement dans le jardin sécurisé. C'est une vraie colonie de vacances familiale."
  },
  {
    question: "Êtes-vous une pet sitter qualifiée et agréée ?",
    answer: "Oui, je possède l'ACACED (Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques) obligatoire pour exercer légalement la pension pour chiens et chats en France."
  }
];

export const faqSchema = faqs.map(f => ({
  "@type": "Question" as const,
  "name": f.question,
  "acceptedAnswer": {
    "@type": "Answer" as const,
    "text": f.answer
  }
}));
