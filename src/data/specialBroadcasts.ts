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
  {
    "id": "ghar-kab-aaoge",
    "title": "Ghar Kab Aaoge",
    "artist": "Anu Malik, Mithoon, Sonu Nigam & Arijit Singh",
    "youtubeId": "KoGOONSG1_g"
  },
  {
    "id": "heer-aasmani",
    "title": "Heer Aasmani",
    "artist": "Vishal-Sheykhar, B Praak, Vishal Dadlani & Sheykhar Ravjiani",
    "youtubeId": "i8VAQ8Cy5rs"
  },
  {
    "id": "kar-har-maidaan-fateh",
    "title": "Kar Har Maidaan Fateh (From \"Sanju\")",
    "artist": "Sukhwinder Singh, Shreya Ghoshal & Vikram Montrose",
    "youtubeId": "TDF_KVcC4Qg"
  },
  {
    "id": "main-jahaan-rahoon",
    "title": "Main Jahaan Rahoon",
    "artist": "Himesh Reshammiya, Rahat Fateh Ali Khan & Krishna",
    "youtubeId": "pJZiO24nYEc"
  },
  {
    "id": "mera-rang-de-basanti-chola",
    "title": "MERA RANG DE BASANTI CHOLA",
    "artist": "UDIT NARAYAN, BHUPINDER SINGH, ANAND RAJ ANAND, and DEV KOHLI",
    "youtubeId": "eWNqzgPr6S0"
  },
  {
    "id": "dangal",
    "title": "Dangal",
    "artist": "Daler Mehndi",
    "youtubeId": "bp-KoLN-6G0"
  },
  {
    "id": "sandese-aate-hai",
    "title": "Sandese Aate Hai",
    "artist": "Sonu Nigam & Roop Kumar Rathod",
    "youtubeId": "9sthJUHkzgI"
  },
  {
    "id": "mann-bharryaa-2",
    "title": "Mann Bharryaa 2.0 (From \"Shershaah\")",
    "artist": "B Praak & Jaani",
    "youtubeId": "86h_3HSoEkc"
  },
  {
    "id": "jai-ho",
    "title": "JAI HO",
    "artist": "SUKHWINDER SINGH, TANVI SHAH, MAHALAKSHMI IYER & VIJAY PRAKASH",
    "youtubeId": "2R3XstG35sE"
  },
  {
    "id": "zinda",
    "title": "Zinda",
    "artist": "Shankar Ehsaan Loy & Siddharth Mahadevan",
    "youtubeId": "yX7ryKUtSuc"
  },
  {
    "id": "desh-mere",
    "title": "Desh Mere",
    "artist": "Arijit Singh",
    "youtubeId": "XJQtLFSh01I"
  },
  {
    "id": "jagga-jiteya",
    "title": "Jagga Jiteya",
    "artist": "Daler Mehndi, Dee MC, Shashwat Sachdev & Kumaar",
    "youtubeId": "W98gcU4NuWQ"
  },
  {
    "id": "watan-walo",
    "title": "Watan Walo (Indian/Soundtrack Version)",
    "artist": "Release - Topic",
    "youtubeId": "EAh0eQ-er1Q"
  },
  {
    "id": "ziddi-dil",
    "title": "Ziddi Dil",
    "artist": "Vishal Dadlani",
    "youtubeId": "_r8k7tXvDuQ"
  },
  {
    "id": "chak-de-india",
    "title": "Chak De India",
    "artist": "Sukhvinder Singh, Salim Merchant & Marianne D'Cruz",
    "youtubeId": "OQVU_cJdxxU"
  },
  {
    "id": "maa-tujhhe-salaam-soundtrack",
    "title": "Maa Tujhhe Salaam (Maa Tujhhe Salaam / Soundtrack Version)",
    "artist": "Shankar Mahadevan",
    "youtubeId": "d04W-FtK08M"
  },
  {
    "id": "mitti-ke-bete",
    "title": "Mitti Ke Bete",
    "artist": "Mithoon, Sonu Nigam & Manoj Muntashir",
    "youtubeId": "jtj25bfN5vA"
  },
  {
    "id": "jeetenge",
    "title": "Jeetenge",
    "artist": "Arko & B Praak",
    "youtubeId": "1G4wIq0iVXo"
  },
  {
    "id": "lehra-do",
    "title": "Lehra Do",
    "artist": "Pritam & Arijit Singh",
    "youtubeId": "NhfV-t5v5qI"
  },
  {
    "id": "shaabaashiyaan",
    "title": "Shaabaashiyaan (feat. Akshay Kumar, Kirti Kulhari, Nithya Menen & Sharman Joshi)",
    "artist": "Shilpa Rao, Anand Bhaskar & Abhijeet Srivastava",
    "youtubeId": "3AbNcUfMNV8"
  },
  {
    "id": "des-rangila",
    "title": "Des Rangila",
    "artist": "Mahalaxmi Iyer",
    "youtubeId": "4pO9pTX1568"
  },
  {
    "id": "bhaag-milkha-bhaag-rock",
    "title": "Bhaag Milkha Bhaag (Rock Version)",
    "artist": "Shankar - Ehsaan - Loy, Farhan Akhtar & Sonam Kapoor",
    "youtubeId": "y-kQN4RorPU"
  },
  {
    "id": "maa-tujhe-salaam",
    "title": "Maa Tujhe Salaam",
    "artist": "A.R. Rahman",
    "youtubeId": "8YNNGqJOFnM"
  },
  {
    "id": "tiranga",
    "title": "Tiranga",
    "artist": "B Praak",
    "youtubeId": "Hm5unW2W01E"
  },
  {
    "id": "maatrubhumi",
    "title": "Maatrubhumi (From \"Maatrubhumi: May War Rest in Peace\")",
    "artist": "Himesh Reshammiya, Arijit Singh, Shreya Ghoshal, Master Mani Dharamkot, and Sameer Anjaan",
    "youtubeId": "1myT6aEMMhQ"
  },
  {
    "id": "sarphira",
    "title": "Sarphira",
    "artist": "Pritam, Sreerama Chandra & Kausar Munir",
    "youtubeId": "QzoMEsVSGr4"
  },
  {
    "id": "phir-bhi-dil-hai-hindustani",
    "title": "Phir Bhi Dil Hai Hindustani",
    "artist": "Udit Narayan",
    "youtubeId": "o5AbH0bVovs"
  },
  {
    "id": "soorma-anthem",
    "title": "Soorma Anthem",
    "artist": "Shankar Ehsaan Loy & Shankar Mahadevan",
    "youtubeId": "sBWKY7TDvOM"
  },
  {
    "id": "rang-de-basanti",
    "title": "Rang De Basanti",
    "artist": "A.R. Rahman",
    "youtubeId": "lKtUvzlD9L8"
  },
  {
    "id": "maaye-sky-force",
    "title": "Maaye (From \"Sky Force\")",
    "artist": "Tanishk Bagchi, Manoj Muntashir & B Praak",
    "youtubeId": "k_kKtaMaoNI"
  },
  {
    "id": "jigra",
    "title": "Jigra",
    "artist": "Shashwat Sachdev, Siddharth Basrur & Kumaar",
    "youtubeId": "9pNa1tASHaI"
  },
  {
    "id": "ae-watan-male",
    "title": "Ae Watan (Male)",
    "artist": "Arijit Singh",
    "youtubeId": "vkbIymRmzbI"
  },
  {
    "id": "aisa-des-hai-mera",
    "title": "Aisa Des Hai Mera",
    "artist": "Lata Mangeshkar, Udit Narayan, Gurdas Mann, and Pritha Majumder",
    "youtubeId": "FK2d8GDac3A"
  },
  {
    "id": "jeete-hain-chal",
    "title": "Jeete Hain Chal",
    "artist": "Kavita Seth",
    "youtubeId": "1ujERBhuN48"
  },
  {
    "id": "aazma-le",
    "title": "Aazma Le",
    "artist": "Vishal Dadlani, Siddharth Pandit, & Alok Ranjan Srivastava",
    "youtubeId": "pZ3OPoyCev8"
  },
  {
    "id": "teri-mitti",
    "title": "Teri Mitti",
    "artist": "Arko, B Praak, & Manoj Muntashir",
    "youtubeId": "_Pb8KChWokA"
  },
  {
    "id": "jaihind-ki-senaa",
    "title": "Jaihind Ki Senaa (From \"Shershaah\")",
    "artist": "Vikram Montrose",
    "youtubeId": "skTNvnnrxI4"
  },
  {
    "id": "bharat-ki-beti",
    "title": "Bharat Ki Beti",
    "artist": "Arijit Singh",
    "youtubeId": "G0YT-vFIb8c"
  },
  {
    "id": "yeh-jo-des-hai-tera",
    "title": "Yeh Jo Des Hai Tera",
    "artist": "A.R. Rahman",
    "youtubeId": "V1bwI8tGgAY"
  },
  {
    "id": "kandhon-se-milte-hain-kandhe",
    "title": "Kandhon Se Milte Hain Kandhe",
    "artist": "Shankar Ehsaan Loy, Shankar Mahadevan, Sonu Nigam & Hariharan",
    "youtubeId": "kgeaPKkRBY8"
  },
  {
    "id": "mitti",
    "title": "Mitti",
    "artist": "Vishal-Sheykhar, Vishal Dadlani & Sheykhar Ravjiani",
    "youtubeId": "0L_GnO_4ors"
  },
  {
    "id": "hindustan-meri-jaan",
    "title": "Hindustan Meri Jaan",
    "artist": "Anu Malik, Mithoon, Mohit Chauhan & B Praak",
    "youtubeId": "SS6uXkc20aU"
  },
  {
    "id": "ban-ke-dikha-ikkis",
    "title": "Ban Ke Dikha Ikkis (From \"Ikkis\")",
    "artist": "Jasmine Sandlas, Sachin-Jigar & Amitabh Bhattacharya",
    "youtubeId": "hJ3FQfQMbZw"
  },
  {
    "id": "ashq-na-ho",
    "title": "Ashq Na Ho",
    "artist": "Pritam & Arijit Singh",
    "youtubeId": "OU9S0ZqjL-w"
  },
  {
    "id": "thare-vaaste",
    "title": "Thare Vaaste",
    "artist": "Divya Kumar",
    "youtubeId": "0Gxo2n7dR5o"
  },
  {
    "id": "banda-sam-bahadur",
    "title": "Banda (From \"Sam Bahadur\")",
    "artist": "Shankar-Ehsaan-Loy & Shankar Mahadevan",
    "youtubeId": "_ts1ljg3wWg"
  },
  {
    "id": "chale-chalo",
    "title": "Chale Chalo",
    "artist": "A.R. Rahman",
    "youtubeId": "_tTpDCgdE9A"
  },
  {
    "id": "border",
    "title": "Border",
    "artist": "Gurmoh, B Praak, & Anurag Singh",
    "youtubeId": "1B4QS7j0RnI"
  },
  {
    "id": "salaam-india",
    "title": "Salaam India",
    "artist": "Vishal Dadlani & Salim Merchant",
    "youtubeId": "S2cPR4VJGBU"
  },
  {
    "id": "satyamev-jayate",
    "title": "Satyamev Jayate",
    "artist": "Keerthi Sagathia | Ram Sampath",
    "youtubeId": "SZw3bjIDxlA"
  },
  {
    "id": "challa",
    "title": "Challa",
    "artist": "Romy, Vivek Hariharan, Shashwat Sachdev & Kumaar",
    "youtubeId": "3IIaOLK2aNY"
  },
  {
    "id": "hindustani-suno-gaur",
    "title": "HINDUSTANI (SUNO GAUR SE DUNIYA WALO)",
    "artist": "SHANKAR MAHADEVAN, UDIT NARAYAN, MAHALAKSHMI IYER & DOMNIQUE",
    "youtubeId": "aXZe9T2wmQU"
  },
  {
    "id": "zindagi-maut-na-ban-jaaye",
    "title": "Zindagi Maut Na Ban Jaaye",
    "artist": "Roop Kumar Rathod & Sonu Nigam",
    "youtubeId": "bybiAhD99U0"
  },
  {
    "id": "kadam-kadam",
    "title": "Kadam Kadam",
    "artist": "Vijay Prakash & Mumbai Film Choir",
    "youtubeId": "LR-Hh4o_DR4"
  },
  {
    "id": "tu-bhoola-jise",
    "title": "TU BHOOLA JISE",
    "artist": "AMAAL MALLIK & K.K.",
    "youtubeId": "LlE1emKmPWc"
  },
  {
    "id": "badhte-chalo",
    "title": "Badhte Chalo (From \"Sam Bahadur\")",
    "artist": "Shankar Mahadevan, Vishal Dadlani, Divya Kumar & Shankar–Ehsaan–Loy",
    "youtubeId": "C9j4ptCS4T8"
  },
  {
    "id": "i-love-my-india",
    "title": "I Love My India",
    "artist": "Shankar Mahadevan, Hariharan, Kavita Krishnamurthy & Aditya Narayan",
    "youtubeId": "CwNRD7VKWg8"
  },
  {
    "id": "bharat",
    "title": "Bharat",
    "artist": "Shankar Mahadevan",
    "youtubeId": "8TzwTZYhJYk"
  },
  {
    "id": "maati-ko-maa-kehte-hain",
    "title": "Maati Ko Maa Kehte Hain",
    "artist": "Sonu Nigam & Rochak Kohli",
    "youtubeId": "LRs-Om6Las0"
  },
  {
    "id": "bharat-humko-jaan-se-pyara-hai",
    "title": "Bharat Humko Jaan Se Pyara Hai",
    "artist": "A.R. Rahman & Hariharan",
    "youtubeId": "uy-mc6uyPmk"
  },
  {
    "id": "tiranga-provided",
    "title": "Provided to YouTube by Super Cassettes Industries Private LimitedTiranga · B Praak · Tani",
    "artist": "yadav pankaj 98",
    "youtubeId": "XLb3TGdrdBs"
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