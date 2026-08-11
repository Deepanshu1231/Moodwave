export interface WowMomentSection {
  id: string;
  heading?: string;
  text: string;
}

export interface WowMoment {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  sections: WowMomentSection[];
  closingLine: string;
  image?: string;
}

export const sartaajWowMoments: WowMoment[] = [
  {
    id: "saaz-e-sartaaj",
    label: "WOW MOMENT",
    title: "WHEN THE INSTRUMENT DIDN'T EXIST",
    subtitle: "So he created one.",
    image: "/images/sartaaj-card.png",
    sections: [
      {
        id: "intro",
        text: "Most singers in the world just buy a guitar, learn to play the harmonium, or hire a band to play the exact beats they need. But Dr. Satinder Sartaaj is on a completely different level of musical genius.",
      },
      {
        id: "lead",
        text: "Here is the story of his self-created instrument, explained in simple terms, that will make anyone realize just how deep his artistry goes.",
      },
      {
        id: "birth-heading",
        heading: "The Birth of the \"Saaz-e-Sartaaj\"",
        text: "When Sartaaj was creating his music, he ran into a major problem: the specific sound he heard in his head did not exist in the real world.",
      },
      {
        id: "problem",
        text: "He wanted a very specific musical combination—a deep, heavy bass beat (known as a Dha) mixed seamlessly with a fast, intricate rhythmic pattern (known as a Tirkat). He searched and tested, but absolutely no traditional instrument on Earth could give him both of those sounds at the exact same time.",
      },
      {
        id: "mastery",
        text: "So, what does a true master do when the tool they need doesn't exist?",
      },
      {
        id: "invention",
        text: "They invent it.",
      },
      {
        id: "creation",
        text: "He literally went into the workshop and built a brand-new musical instrument from scratch, completely tailored to his own hands and voice. He proudly named it the \"Saaz-e-Sartaaj\" (The Instrument of Sartaaj).",
      },
      {
        id: "shock",
        text: "But here is the part that will truly leave people shocked: Sartaaj is known to be so bursting with poetry that he will sometimes write entire, complex songs just a few hours before a live concert—sometimes while he is literally sitting in the car driving to the venue!",
      },
      {
        id: "performance",
        text: "Because the band hasn't had days to practice this brand-new song, he walks out onto the stage with his Saaz-e-Sartaaj in hand. He uses his custom invention to play the exact rhythm he just created in his head, using it to instantly guide and lead his entire band into a flawless live performance.",
      },
      {
        id: "awe",
        text: "When you hear a story like this, you are forced to just sit back in absolute awe. It makes you realize that he isn't just a guy who sings words written by someone else to a pre-made track. He is a scientist of sound who builds his own tools to pull the music straight from his soul into the real world.",
      },
    ],
    closingLine: "Oh wow... so THIS is what you call a true singer and artist!",
  },
];
