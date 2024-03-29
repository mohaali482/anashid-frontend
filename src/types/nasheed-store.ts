export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Nasheed[];
}

export interface Owner {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  image: string | null;
  date_joined: Date;
}

export interface Nasheed {
  id: number;
  owner: Owner;
  name: string;
  poster: string;
  audio: string;
  description: string;
  duration: number;
  created_at: Date;
  updated_at: Date;
  saved: Boolean | null;
  saved_id?: number;
}

export interface NasheedError {
  name?: Array<string>;
  poster?: Array<string>;
  audio?: Array<string>;
}

export interface NasheedsState {
  items: Array<Nasheed>;
  nasheed: Nasheed | null;
  loading: boolean;
  formErrors: NasheedError;
  error: string | null;
  next: string | null;
  previous: string | null;
  limit: number;
  loadedIds: Array<number>;
  loadMoreLoading: boolean;
  query: string;
  currentPlaying: Nasheed | null;
  currentPlayingQueue: Array<Nasheed>;
  currentPlayingPaused: boolean;
  message: string | null;
}

export interface Query {
  query: string;
}
