import type { Playlist } from "../types/music";
export interface BroadcastQuote {
  id: string;
  text: string;
  author: string;
}

export interface SpecialBroadcast {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  bannerImage: string;
  playlist: Playlist;
  quotes: BroadcastQuote[];
}

export const independenceDayBroadcast: SpecialBroadcast = {
  id: "independence-day-2026",
  title: "स्वतंत्रता दिवस",
  subtitle: "Azaadi Ki Dhun",
  description:
    "A special transmission from MoodWave FM",
    
  backgroundImage:
    "/images/independence-banner2.jpg",

  bannerImage:
    "/images/independence-banner.jpg",

  playlist: {
  id: "azaadi-ki-dhun",
  name: "Azaadi Ki Dhun",
  subtitle: "SPECIAL INDEPENDENCE DAY BROADCAST",
  description:
    "A temporary patriotic broadcast from MoodWave FM.",
  linerNote:
    "A SPECIAL TRANSMISSION FOR 15 AUGUST.",
  stationCode: "MW / 015",
  accent: "#d6a45d",

  scenes: [
    {
      id: "independence-main",
      name: "Independence",
      image: "/images/independence-banner2.jpg",
    },
  ],

  songs: [
    {
      id: "temporary-song",
      title: "Teri Mitti",
      artist: "B Praak",
      youtubeId: "-u-nzTDFiSQ",
    },
    {
    id: "maaye-sky-force",
    title: "Maaye ",
    artist: "Tanishk Bagchi, Manoj Muntashir & B Praak",
    youtubeId: "k_kKtaMaoNI",
  },
  {
    id: "desh-mere",
    title: "Desh Mere",
    artist: "Arijit Singh",
    youtubeId: "XJQtLFSh01I",
  },
  {
    id: "mann-bharryaa-2",
    title: "Mann Bharryaa ",
    artist: "B Praak & Jaani",
    youtubeId: "86h_3HSoEkc",
  },
    
  ],
},

  quotes: [
  {
    id: "martyr-quote-1",
    text: "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.",
    author: "Bhagat Singh"
  },
  {
    id: "martyr-quote-2",
    text: "The shots that hit me are the last nails to the coffin of British rule in India.",
    author: "Lala Lajpat Rai"
  },
  {
    id: "martyr-quote-3",
    text: "If yet your blood does not rage, then it is water that flows in your veins. For what is the flush of youth, if it is not of service to the motherland.",
    author: "Chandrashekhar Azad"
  },
  {
    id: "martyr-quote-4",
    text: "The desire for revolution is in our hearts, let us see what strength there is in the arms of our executioner.",
    author: "Ram Prasad Bismil"
  },
  {
    id: "martyr-quote-5",
    text: "I shall not surrender my Jhansi.",
    author: "Rani Lakshmibai"
  },
  {
    id: "martyr-quote-6",
    text: "My only prayer to God is that I may be born again to the same Mother and I may re-die in the same sacred cause till the cause is successful.",
    author: "Madan Lal Dhingra"
  },
  
  {
    id: "martyr-quote-7",
    text: "It is blood alone that can pay the price of freedom. Give me blood, and I shall give you freedom!",
    author: "Netaji Subhas Chandra Bose"
  },
  {
    id: "martyr-quote-8",
    text: "We will face the bullets of the enemies. We are free, and we will remain free! (Dushman ki goliyon ka hum samna karenge, Azad hee rahein hain, Azad hee rahenge!)",
    author: "Chandrashekhar Azad"
  },
  {
    id: "martyr-quote-9",
    text: "I am not afraid to die. I am proud to die, to have to free my native land. I hope that when I am gone, in my place will come thousands of my countrymen to drive you out.",
    author: "Sardar Udham Singh"
  },
  {
    id: "martyr-quote-10",
    text: "Bombs and pistols do not make a revolution. The sword of revolution is sharpened on the whetting-stone of ideas.",
    author: "Bhagat Singh"
  },
  {
    id: "martyr-quote-11",
    text: "If I had to live more than one life, I would sacrifice each of them for my country's sake without a second thought.",
    author: "Kartar Singh Sarabha"
  },
  {
    id: "martyr-quote-12",
    text: "Even if I have to face death a thousand times for the sake of my Motherland, I shall not be sorry. Oh Lord! Grant me a hundred births in India.",
    author: "Ashfaqulla Khan"
  },
],
};