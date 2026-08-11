import type {
  Category,
  Playlist,
} from "../types/music";

export type {
  Category,
  Playlist,
  Song,
  Scene,
} from "../types/music";

export const categoryIds: Category[] = [
  "hindi",
  "punjabi",
  "english",
];

export const categoryLabels: Record<
  Category,
  string
> = {
  hindi: "हिंदी",
  punjabi: "ਪੰਜਾਬੀ",
  english: "ENGLISH",
};

export const playlistsByCategory: Record<
  Category,
  Playlist[]
> = {
  hindi: [
    {
      id: "driver",
      name: "सफ़र",
      subtitle: "SAFAR",
      description:
        "कुछ रास्ते मंज़िल से ज़्यादा ख़ूबसूरत होते हैं।",
      linerNote:
        "FOR ROADS THAT DON'T NEED A DESTINATION.",
      stationCode: "MW / 001",
      accent: "#d6a45d",

      scenes: [
        {
          id: "sunset-highway",
          name: "Sunset Highway",
          image:
            "/images/bollywood-safar-sunset.jpg",
        },
        {
          id: "rainy-highway",
          name: "Rainy Highway",
          image:
            "/images/bollywood-safar-rain.jpg",
        },
        {
          id: "midnight-highway",
          name: "Midnight Highway",
          image:
            "/images/bollywood-safar-midnight.jpg",
        },
      ],

      songs: [
        {
          id: "dil-chahta-hai",
          title: "Dil Chahta Hai",
          artist: "Shankar Mahadevan",
          youtubeId: "Wg785zHBahk",
        },
        {
          id: "hairat",
          title: "Hairat",
          artist: "Lucky Ali",
          youtubeId: "hfy_Ntf9rYA",
        },
        {
          id: "yun-hi-chala-chal",
          title: "Yun Hi Chala Chal",
          artist:
            "Udit Narayan, Hariharan, Kailash Kher",
          youtubeId: "vTBbi3qIC0s",
        },
        {
          id: "ilahi",
          title: "Ilahi",
          artist: "Arijit Singh",
          youtubeId: "mJVPL-o25_w",
        },
        {
          id: "safarnama",
          title: "Safarnama",
          artist: "Lucky Ali",
          youtubeId: "7mTDBsdfw88",
        },
        {
          id: "khaabon-ke-parinday",
          title: "Khaabon Ke Parinday",
          artist:
            "Alyssa Mendonsa, Mohit Chauhan",
          youtubeId: "cscdqZUdgCk",
        },
        {
          id: "aao-milo-chalo",
          title: "Aao Milo Chalo",
          artist:
            "Shaan, Ustad Sultan Khan",
          youtubeId: "U0JYkRqU6eY",
        },
        {
          id: "sooraj-dooba-hain",
          title: "Sooraj Dooba Hain",
          artist:
            "Arijit Singh, Aditi Singh Sharma",
          youtubeId: "nJZcbidTutE",
        },
      ],
    },

    {
      id: "barber",
      name: "महफ़िल",
      subtitle: "MEHFIL",
      description:
        "धीमी शामें, अच्छी बातें और कोई जल्दी नहीं।",
      linerNote:
        "SLOW MUSIC. GOOD COMPANY. NO RUSH.",
      stationCode: "MW / 002",
      accent: "#b86d62",

      scenes: [
        {
          id: "old-barbershop",
          name: "The Old Barbershop",
          image:
            "/images/Mehfil-1.jpg",
        },
        {
          id: "evening-cafe",
          name: "Evening Café",
          image:
            "/images/Mehfil-2.jpg",
        },
        {
          id: "rooftop-evening",
          name: "Rooftop Evening",
          image:
            "/images/Mehfil-3.jpg",
        },
      ],

      songs: [
        {
          id: "sham",
          title: "Sham",
          artist:
            "Amit Trivedi, Neuman Pinto",
          youtubeId: "kl8T6tsOZJk",
        },
        {
          id: "gulaabi-aankhen",
          title: "Gulaabi Aankhen",
          artist: "Sanam",
          youtubeId: "hgi2MYAFgE8",
        },
        {
          id: "iktara",
          title: "Iktara",
          artist:
            "Kavita Seth, Amitabh Bhattacharya",
          youtubeId: "akjdj6iHttY",
        },
        {
          id: "phir-se-ud-chala",
          title: "Phir Se Ud Chala",
          artist: "Mohit Chauhan",
          youtubeId: "2mWaqsC3U7k",
        },
        {
          id: "te-amo",
          title: "Te Amo",
          artist:
            "Ash King, Sunidhi Chauhan",
          youtubeId: "3N3n23loy24",
        },
        {
          id: "uff-teri-adaa",
          title: "Uff Teri Adaa",
          artist: "Shankar Mahadevan",
          youtubeId: "qTsAdjULqwg",
        },
        {
          id: "bheegi-si-bhaagi-si",
          title: "Bheegi Si Bhaagi Si",
          artist:
            "Mohit Chauhan, Antara Mitra",
          youtubeId: "yHWPO9DDnsk",
        },
        {
          id: "zehnaseeb",
          title: "Zehnaseeb",
          artist:
            "Chinmayi, Shekhar Ravjiani",
          youtubeId: "WnU0lH6C0EA",
        },
      ],
    },

    {
      id: "night",
      name: "रात बाकी है",
      subtitle: "RAAT BAAKI HAI",
      description:
        "जब शहर सो जाए और नींद का कोई इरादा न हो।",
      linerNote:
        "FOR THE HOURS WHEN SLEEP DOESN'T MAKE SENSE.",
      stationCode: "MW / 003",
      accent: "#8d5965",

      scenes: [
        {
          id: "rainy-city",
          name: "Rainy City",
          image:
            "/images/Raat.jpg",
        },
        {
          id: "empty-street",
          name: "Empty Street",
          image:
            "/images/Night.jpg",
        },
        {
          id: "window-at-night",
          name: "Window At Night",
          image:
            "/images/SheharDiRaat.jpg",
        },
      ],

      songs: [
        {
          id: "kabira",
          title: "Kabira",
          artist:
            "Tochi Raina, Rekha Bhardwaj",
          youtubeId: "jHNNMj5bNQw",
        },
        {
          id: "tum-se-hi",
          title: "Tum Se Hi",
          artist: "Mohit Chauhan",
          youtubeId: "Cb6wuzOurPc",
        },
        {
          id: "channa-mereya",
          title: "Channa Mereya",
          artist: "Arijit Singh",
          youtubeId: "bzSTpdcs-EI",
        },
        {
          id: "tujhe-kitna-chahne-lage",
          title:
            "Tujhe Kitna Chahne Lage",
          artist: "Arijit Singh",
          youtubeId: "AgX2II9si7w",
        },
        {
          id: "agar-tum-saath-ho",
          title: "Agar Tum Saath Ho",
          artist:
            "Alka Yagnik, Arijit Singh",
          youtubeId: "xRb8hxwN5zc",
        },
        {
          id: "kun-faya-kun",
          title: "Kun Faya Kun",
          artist:
            "A.R. Rahman, Javed Ali, Mohit Chauhan",
          youtubeId: "T94PHkuydcw",
        },
        {
          id: "shayad",
          title: "Shayad",
          artist: "Arijit Singh",
          youtubeId: "MJyKN-8UncM",
        },
        {
          id: "raabta",
          title: "Raabta",
          artist: "Arijit Singh",
          youtubeId: "iYy9kr45d1o",
        },
      ],
    },

    {
      id: "mountain",
      name: "पहाड़ों के पार",
      subtitle: "PAHADON KE PAAR",
      description:
        "जहाँ रास्ते ख़त्म होते हैं, वहाँ सफ़र शुरू होता है।",
      linerNote:
        "LEAVE THE CITY SOMEWHERE BEHIND.",
      stationCode: "MW / 004",
      accent: "#70866b",

      scenes: [
        {
          id: "mountain-dawn",
          name: "Mountain Dawn",
          image:
            "/images/Pahad.jpg",
        },
        {
          id: "misty-road",
          name: "Misty Road",
          image:
            "/images/Mountain.jpg",
        },
        {
          id: "mountain-evening",
          name: "Mountain Evening",
          image:
            "/images/Safar-3.jpg",
        },
      ],

      songs: [
        {
          id: "pahadon-mein",
          title: "Pahadon Mein",
          artist: "Salman Elahi",
          youtubeId: "wn1cjeyO59E",
        },
        {
          id: "baarishein",
          title: "Baarishein",
          artist: "Anuv Jain",
          youtubeId: "PJWemSzExXs",
        },
        {
          id: "kho-gaye-hum-kahan",
          title: "Kho Gaye Hum Kahan",
          artist:
            "Jasleen Royal, Prateek Kuhad",
          youtubeId: "vt4jX0iRgCg",
        },
        {
          id: "alag-aasmaan",
          title: "Alag Aasmaan",
          artist: "Anuv Jain",
          youtubeId: "vA86QFrXoho",
        },
        {
          id: "kasoor",
          title: "Kasoor",
          artist: "Prateek Kuhad",
          youtubeId: "BmUe3-sfr7E",
        },
        {
          id: "khush-to-hai-na",
          title: "Khush To Hai Na",
          artist: "Osho Jain",
          youtubeId: "F652A0WP-24",
        },
      ],
    },
  ],

  punjabi: [
   {
  id: "sartaaj",
  name: "Sartaaj",
  subtitle: "The Poet's Journey",
  description:
    "Sufi poetry, soulful melodies and timeless Punjabi storytelling.",
  linerNote:
    "For roads, memories and quiet evenings.",
  stationCode: "MW / P01",
  accent: "#d6a85f",

  scenes: [
    {
      id: "sartaaj-card",
      name: "Prelude",
      image: "/images/sartaaj-card.png",
    },
    {
      id: "sartaaj-shaam",
      name: "Shaam",
      image: "/images/sartaaj-scene-1.jpg",
    },
    {
      id: "sartaaj-safar",
      name: "Safar",
      image: "/images/sartaaj-scene-2.jpg",
    },
    {
      id: "sartaaj-raat",
      name: "Raat",
      image: "/images/sartaaj-scene-3.jpg",
    },
    {
      id: "sartaaj-pind",
      name: "Pind",
      image: "/images/sartaaj.jpg.jpg",
    },
  ],

  songs: [
    { id: "sai-satinder-sartaaj", title: "Sai", artist: "Satinder Sartaaj", youtubeId: "SXgm92NM5CE" },
    { id: "yamaha-satinder-sartaaj", title: "Yamaha", artist: "Satinder Sartaaj", youtubeId: "PQej_S2I4VE" },
    { id: "masoomiyat-satinder-sartaaj", title: "Masoomiyat", artist: "Satinder Sartaaj", youtubeId: "tIsHrkMD4-0" },
    { id: "sajjan-raazi-satinder-sartaaj", title: "Sajjan Raazi", artist: "Satinder Sartaaj", youtubeId: "t6vm8h5BDxo" },
    { id: "cheere-wala-satinder-sartaaj", title: "Cheere Waala", artist: "Satinder Sartaaj", youtubeId: "kdzUeCq2Ers" },
    { id: "rutba-satinder-sartaaj", title: "Rutba", artist: "Satinder Sartaaj", youtubeId: "NIsWQ2z7q6I" },
    { id: "zikr-tera-satinder-sartaaj", title: "Zikr Tera", artist: "Satinder Sartaaj", youtubeId: "bkcYXUuV3AM" },
    { id: "tere-waaste-satinder-sartaaj", title: "Tere Waaste", artist: "Satinder Sartaaj", youtubeId: "ww2lWzwbnIg" },
    { id: "hamayat-satinder-sartaaj", title: "Hamayat", artist: "Satinder Sartaaj", youtubeId: "iL4RB2H9Le4" },
    { id: "auzaar-satinder-sartaaj", title: "Auzaar", artist: "Satinder Sartaaj", youtubeId: "Yqi2_3E1ZNk" },
    { id: "aakhri-apeal-satinder-sartaaj", title: "Aakhri Apeal", artist: "Satinder Sartaaj", youtubeId: "1mAkcw9fGiI" }
  ],
},

    {
      id: "pind-di-khushboo",
      name: "Pind Di Khushboo",
      subtitle: "Songs that feel like home",
      description:
        "Earthy Punjabi melodies, folk warmth and open-road evenings.",
      linerNote:
        "FOR FIELDS, DUSTY ROADS AND EVENING TEA.",
      stationCode: "MW / 202",
      accent: "#9f7b4f",

      scenes: [
        {
          id: "pind-fields",
          name: "Village Fields",
          image:
            "/images/punjabi-pind-evening.jpg",
        },
        {
          id: "pind-road",
          name: "Pind Road",
          image:
            "/images/punjabi-pind-fields.jpg",
        },
        {
          id: "pind-evening",
          name: "Village Evening",
          image:
            "/images/punjabi-pind-road.jpg",
        },
      ],

      songs: [
        { id: "challa-gurdas-maan", title: "Challa", artist: "Gurdas Maan", youtubeId: "fsM-eXNNSSo" },
        { id: "mitti-di-khushboo-ayushmann-khurrana", title: "Mitti Di Khushboo", artist: "Ayushmann Khurrana", youtubeId: "8uJ-wOljP_s" },
        { id: "apna-punjab-hove-gurdas-maan", title: "Apna Punjab Hove", artist: "Gurdas Maan", youtubeId: "1cHLSWmVnTE" },
        { id: "mera-pind-harbhajan-mann", title: "Mera Pind", artist: "Harbhajan Mann", youtubeId: "fSY9z9G2QW8" },
        { id: "ki-banu-duniya-da-gurdas-maan-diljit-dosanjh", title: "Ki Banu Duniya Da", artist: "Gurdas Maan ft. Diljit Dosanjh", youtubeId: "pjQyBF2gwjQ" },
        { id: "yaar-anmulle-sharry-mann", title: "Yaar Anmulle", artist: "Sharry Mann", youtubeId: "HtdqWKBNCac" },
        { id: "akhar-amrinder-gill", title: "Akhar", artist: "Amrinder Gill", youtubeId: "BneomzOccuk" },
        { id: "subaah-amrinder-gill", title: "Subaah", artist: "Amrinder Gill", youtubeId: "DmNT89Rz3GU" },
        { id: "khedan-de-din-gurdas-maan", title: "Khedan De Din", artist: "Gurdas Maan", youtubeId: "ArVaAaSioX8" },
        { id: "pind-b-praak", title: "Jhaanjar", artist: "B Praak", youtubeId: "26iXuJSBG-w" },
        { id: "jatt-te-zameen-tarsem-jassar", title: "Jatt Te Zameen", artist: "Tarsem Jassar", youtubeId: "Qm-PWmkYwy4" },
        { id: "mirza-harbhajan-mann", title: "Mirza", artist: "Harbhajan Mann", youtubeId: "AI1g_UgTifo" }
      ],
    },

    {
      id: "ishq-punjabi",
      name: "Ishq Punjabi",
      subtitle: "For the softer hours",
      description:
        "Romantic Punjabi songs for quiet evenings and long conversations.",
      linerNote:
        "FOR THE HOURS THAT SPEAK SOFTLY.",
      stationCode: "MW / 203",
      accent: "#b86b73",

      scenes: [
        {
          id: "ishq-window",
          name: "Quiet Window",
          image:
            "/images/punjabi-ishq-evening.jpg",
        },
        {
          id: "ishq-evening",
          name: "Evening Walk",
          image:
            "/images/punjabi-ishq-rain.jpg",
        },
        {
          id: "ishq-rain",
          name: "Soft Rain",
          image:
            "/images/punjabi-ishq-window.jpg",
        },
      ],

      songs: [
        { id: "khaab-akhil", title: "Khaab", artist: "Akhil", youtubeId: "-N9-GPJ38PI" },
        { id: "soch-hardy-sandhu", title: "Soch", artist: "Hardy Sandhu", youtubeId: "WRUGxF2cQ8Q" },
        { id: "qismat-ammy-virk", title: "Qismat", artist: "Ammy Virk", youtubeId: "9xVp8m0fJSg" },
        { id: "waalian-harnoor", title: "Waalian", artist: "Harnoor", youtubeId: "rCoPr8UwRMc" },
        { id: "chan-sitare-ammy-virk", title: "Chan Sitare", artist: "Ammy Virk", youtubeId: "D0gWr9K8Lb4" },
        { id: "moonlight-harnoor", title: "Moonlight", artist: "Harnoor", youtubeId: "FauFM7fz6vE" },
        { id: "sakhiyaan-maninder-buttar", title: "Sakhiyaan", artist: "Maninder Buttar", youtubeId: "yXXQalqSr84" },
        { id: "pachtaoge-b-praak", title: "Pachtaoge", artist: "B Praak", youtubeId: "8Ln_QVXdLFM" },
        { id: "rabb-wangu-jassie-gill", title: "Rabb Wangu", artist: "Jassie Gill", youtubeId: "BzJzoR_2L5c" },
        { id: "kinna-chir-prophec", title: "Kinna Chir", artist: "The PropheC", youtubeId: "Wa6it7j_OHY" },
        { id: "lover-diljit-dosanjh", title: "Lover", artist: "Diljit Dosanjh", youtubeId: "3K66ntQkJko" },
        { id: "lehenga-jass-manak", title: "Lehanga", artist: "Jass Manak", youtubeId: "sHMv8tnCUg8" }
      ]
    },

    {
      id: "shehar-di-raat",
      name: "Shehar Di Raat",
      subtitle: "Punjabi after dark",
      description:
        "Modern Punjabi sounds for city lights and late-night drives.",
      linerNote:
        "FOR CITY LIGHTS AND LATE DRIVES.",
      stationCode: "MW / 204",
      accent: "#6d7f9d",

      scenes: [
        {
          id: "shehar-neon",
          name: "City Neon",
          image:
            "/images/punjabi-shehar-drive.jpg",
        },
        {
          id: "shehar-drive",
          name: "Late Drive",
          image:
            "/images/punjabi-shehar-neon.jpg",
        },
        {
          id: "shehar-rooftop",
          name: "Rooftop Night",
          image:
            "/images/punjabi-shehar-rooftop.jpg",
        },
      ],

      songs: [
        { id: "elevated-shubh", title: "Elevated", artist: "Shubh", youtubeId: "drEgWONDeBE" },
        { id: "no-love-shubh", title: "No Love", artist: "Shubh", youtubeId: "8NSwBRrhadc" },
        { id: "we-rollin-shubh", title: "We Rollin", artist: "Shubh", youtubeId: "qRBDz7tCCbk" },
        { id: "goat-diljit-dosanjh", title: "G.O.A.T.", artist: "Diljit Dosanjh", youtubeId: "cl0a3i2wFcc" },
        { id: "brown-munde-ap-dhillon", title: "Brown Munde", artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon", youtubeId: "FM2ykrYbzqg" },
        { id: "insane-ap-dhillon", title: "Insane", artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon", youtubeId: "cqP8I5aaud8" },
        { id: "excuses-ap-dhillon", title: "Excuses", artist: "AP Dhillon, Gurinder Gill", youtubeId: "x18b0D8sTwo" },
        { id: "with-you-ap-dhillon", title: "With You", artist: "AP Dhillon", youtubeId: "wScs3JNn8Lg" },
        { id: "softly-karan-aujla", title: "Softly", artist: "Karan Aujla", youtubeId: "vCcdI_vNh-Y" },
        { id: "tauba-tauba-karan-aujla", title: "Tauba Tauba", artist: "Karan Aujla", youtubeId: "LK7-_dgAVQE" },
        { id: "so-high-sidhu-moose-wala", title: "So High", artist: "Sidhu Moose Wala", youtubeId: "YMQHdJqsWE8" },
        { id: "same-beef-sidhu-moose-wala-bohemia", title: "Same Beef", artist: "Sidhu Moose Wala, Bohemia", youtubeId: "qk2WMmiiVFE" }
      ],
    },
  ],

  english: [
    {
      id: "driver",
      name: "Midnight Drive",
      subtitle: "MIDNIGHT DRIVE",
      description:
        "Neon roads, empty highways and somewhere to disappear.",
      linerNote:
        "FOR ROADS THAT LOOK BETTER AFTER MIDNIGHT.",
      stationCode: "MW / 101",
      accent: "#5f8e9d",

      scenes: [
        {
          id: "neon-highway",
          name: "Neon Highway",
          image:
            "/images/Driver.jpg",
        },
        {
          id: "rainy-city-drive",
          name: "Rainy City Drive",
          image:
            "/images/Night.jpg",
        },
        {
          id: "empty-freeway",
          name: "Empty Freeway",
          image:
            "/images/Raat.jpg",
        },
      ],

      songs: [
        {
          id: "nightcall",
          title: "Nightcall",
          artist: "Kavinsky",
          youtubeId: "MV_3Dpw-BRY",
        },
        {
          id: "blinding-lights",
          title: "Blinding Lights",
          artist: "The Weeknd",
          youtubeId: "4NRXx6U8ABQ",
        },
        {
          id: "midnight-city",
          title: "Midnight City",
          artist: "M83",
          youtubeId: "dX3k_VG8MsM",
        },
        {
          id: "resonance",
          title: "Resonance",
          artist: "HOME",
          youtubeId: "8GW6sLrK40k",
        },
        {
          id: "acid-rain",
          title: "Acid Rain",
          artist: "LORN",
          youtubeId: "nxcJW6bs5os",
        },
        {
          id: "a-real-hero",
          title: "A Real Hero",
          artist: "College & Electric Youth",
          youtubeId: "wcVylpvepOM",
        },
        {
          id: "under-your-spell",
          title: "Under Your Spell",
          artist: "Desire",
          youtubeId: "9K7rmxjk5RQ",
        },
        {
          id: "tick-of-the-clock",
          title: "Tick of the Clock",
          artist: "Chromatics",
          youtubeId: "vGj6XmCOWq4",
        },
      ],
    },

    {
      id: "barber",
      name: "Sunday Afternoon",
      subtitle: "SUNDAY AFTERNOON",
      description:
        "Slow afternoons, dusty records and nowhere to be.",
      linerNote:
        "SOME AFTERNOONS ARE MEANT TO BE WASTED.",
      stationCode: "MW / 102",
      accent: "#a88768",

      scenes: [
        {
          id: "classic-barbershop",
          name: "Classic Barbershop",
          image:
            "/images/Barber.png",
        },
        {
          id: "record-store",
          name: "Record Store",
          image:
            "/images/Background.png",
        },
        {
          id: "warm-living-room",
          name: "Warm Living Room",
          image:
            "/images/Sartaj-3.jpg",
        },
      ],

      songs: [
        {
          id: "feather",
          title: "Feather",
          artist: "Nujabes ft. Cise Starr & Akin",
          youtubeId: "h4FpcJv-N0g",
        },
        {
          id: "aruarian-dance",
          title: "Aruarian Dance",
          artist: "Nujabes",
          youtubeId: "g9hwjQBQFIo",
        },
        {
          id: "study-session",
          title: "1 A.M Study Session",
          artist: "Lofi Girl",
          youtubeId: "lTRiuFIWV54",
        },
        {
          id: "coffin-nails",
          title: "Coffin Nails",
          artist: "MF DOOM",
          youtubeId: "fGFNmEOntFA",
        },
        {
          id: "im-closing-my-eyes",
          title: "I'm Closing My Eyes",
          artist: "potsu",
          youtubeId: "gqY5t_h_u0Q",
        },
        {
          id: "controlla",
          title: "Controlla",
          artist: "idealism",
          youtubeId: "xzYw230z4pM",
        },
        {
          id: "time-donut",
          title: "Time: The Donut of the Heart",
          artist: "J Dilla",
          youtubeId: "fC3Cthm0HFU",
        },
        {
          id: "far-away",
          title: "Far Away",
          artist: "Tomppabeats",
          youtubeId: "JQhLz-I006M",
        },
      ],
    },

    {
      id: "night",
      name: "After Hours",
      subtitle: "AFTER HOURS",
      description:
        "For the hours when the city finally goes quiet.",
      linerNote:
        "SOME THINGS SOUND BETTER AFTER MIDNIGHT.",
      stationCode: "MW / 103",
      accent: "#74658c",

      scenes: [
        {
          id: "los-angeles-night",
          name: "Los Angeles Night",
          image:
            "/images/Night.jpg",
        },
        {
          id: "lonely-street",
          name: "Lonely Street",
          image:
            "/images/Raat.jpg",
        },
        {
          id: "bedroom-window",
          name: "Bedroom Window",
          image:
            "/images/SheharDiRaat.jpg",
        },
      ],

      songs: [
        {
          id: "apocalypse",
          title: "Apocalypse",
          artist: "Cigarettes After Sex",
          youtubeId: "sElE_BfQ67s",
        },
        {
          id: "space-song",
          title: "Space Song",
          artist: "Beach House",
          youtubeId: "RBtlPT23PTM",
        },
        {
          id: "slow-dancing-in-the-dark",
          title: "SLOW DANCING IN THE DARK",
          artist: "Joji",
          youtubeId: "KIDOvgZn0GQ",
        },
        {
          id: "the-night-we-met",
          title: "The Night We Met",
          artist: "Lord Huron",
          youtubeId: "KtlgYxa6PEE",
        },
        {
          id: "nights",
          title: "Nights",
          artist: "Frank Ocean",
          youtubeId: "r4l9bFqgMaQ",
        },
        {
          id: "teardrop",
          title: "Teardrop",
          artist: "Massive Attack",
          youtubeId: "u7K72X4eo_s",
        },
        {
          id: "chamber-of-reflection",
          title: "Chamber of Reflection",
          artist: "Mac DeMarco",
          youtubeId: "p-Z3YZvwOAA",
        },
        {
          id: "a-walk",
          title: "A Walk",
          artist: "Tycho",
          youtubeId: "mehLx_Fjv_c",
        },
      ],
    },

    {
      id: "mountain",
      name: "Into the Wild",
      subtitle: "INTO THE WILD",
      description:
        "Leave the city behind and follow the road.",
      linerNote:
        "SOMETIMES THE BEST DESTINATION IS NOWHERE.",
      stationCode: "MW / 104",
      accent: "#70856c",

      scenes: [
        {
          id: "golden-mountain",
          name: "Golden Mountain",
          image:
            "/images/Mountain.jpg",
        },
        {
          id: "forest-road",
          name: "Forest Road",
          image:
            "/images/Pahad.jpg",
        },
        {
          id: "mountain-sunset",
          name: "Mountain Sunset",
          image:
            "/images/Safar-3.jpg",
        },
      ],

      songs: [
        {
          id: "holocene",
          title: "Holocene",
          artist: "Bon Iver",
          youtubeId: "TWcyIpul8OE",
        },
        {
          id: "helplessness-blues",
          title: "Helplessness Blues",
          artist: "Fleet Foxes",
          youtubeId: "6mR8Z-qwPNU",
        },
        {
          id: "riptide",
          title: "Riptide",
          artist: "Vance Joy",
          youtubeId: "uJ_1HMAGb4k",
        },
        {
          id: "ho-hey",
          title: "Ho Hey",
          artist: "The Lumineers",
          youtubeId: "zvCBSSwgtg4",
        },
        {
          id: "society",
          title: "Society",
          artist: "Eddie Vedder",
          youtubeId: "lm8oxC24QZc",
        },
        {
          id: "old-pine",
          title: "Old Pine",
          artist: "Ben Howard",
          youtubeId: "x8ccDb6n5Wg",
        },
        {
          id: "heartbeats",
          title: "Heartbeats",
          artist: "José González",
          youtubeId: "s4BjEqhMOiI",
        },
        {
          id: "san-luis",
          title: "San Luis",
          artist: "Gregory Alan Isakov",
          youtubeId: "O15xUSL-UqM",
        },
      ],
    },
  ],
};

export const isCategory = (
  value: string | undefined
): value is Category => {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(
      playlistsByCategory,
      value
    )
  );
};
