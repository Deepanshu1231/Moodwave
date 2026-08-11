export interface Song {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
}

export interface Scene {
  id: string;
  name: string;
  image: string;
}

export interface Playlist {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  linerNote: string;
  stationCode: string;
  accent: string;
  scenes: Scene[];
  songs: Song[];
}

export type Category = "hindi" | "punjabi" | "english";

export type RepeatMode = "off" | "all" | "one";
