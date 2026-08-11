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

export interface PoetryExcerpt {
  text: string;
  source: string;
}

export interface ArchiveItem {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  year?: string;
  source?: string;
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
  specialClass?: string;
  portraitImage?: string;
  customLabel?: string;
  customLinerText?: string;
  poetryExcerpts?: PoetryExcerpt[];
  archiveItems?: ArchiveItem[];
}

export type Category = "hindi" | "punjabi" | "english";

export type RepeatMode = "off" | "all" | "one";
