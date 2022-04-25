export interface MoviesResponse {
  "@meta": Meta;
  "@type": string;
  query: string;
  results: Result[];
  types: string[];
}

export interface Meta {
  operation: string;
  requestId: string;
  serviceTimeMs: number;
}

export interface Result {
  id: string;
  image?: Image;
  legacyNameText?: string;
  name?: string;
  knownFor?: KnownFor[];
  akas?: string[];
  disambiguation?: string;
  runningTimeInMinutes?: number;
  title?: Title;
  titleType?: TitleType;
  year?: number;
  principals?: Principal[];
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface KnownFor {
  cast?: Cast[];
  summary: Summary;
  id: string;
  title: string;
  titleType: string;
  year?: number;
  crew?: Crew[];
  disambiguation?: string;
}

export interface Cast {
  category: CastCategory;
  characters?: string[];
  endYear?: number;
  episodeCount?: number;
  roles?: Role[];
  startYear?: number;
  billing?: number;
  as?: string;
}

export enum CastCategory {
  Actor = "actor",
  Actress = "actress",
  Miscellaneous = "miscellaneous",
  Producer = "producer",
}

export interface Role {
  character: string;
  characterId?: string;
}

export interface Crew {
  attr?: string[];
  category: string;
  freeTextAttributes?: string[];
  job?: string;
  endYear?: number;
  episodeCount?: number;
  startYear?: number;
}

export interface Summary {
  category: CastCategory;
  characters?: string[];
  displayYear?: string;
}

export interface Principal {
  disambiguation?: string;
  id: string;
  legacyNameText: string;
  name: string;
  category: PrincipalCategory;
  characters?: string[];
  roles?: Role[];
  billing?: number;
  attr?: string[];
}

export enum PrincipalCategory {
  Actor = "actor",
  Actress = "actress",
  Self = "self",
}

export enum Title {
  A = "A",
  Alpha = "Alpha",
}

export enum TitleType {
  Movie = "movie",
  Short = "short",
}
