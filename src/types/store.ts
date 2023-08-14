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
  image: File | null;
  date_joined: Date;
}

export interface Nasheed {
  id: number;
  owner: Owner;
  name: string;
  poster: string;
  audio: string;
  created_at: Date;
  updated_at: Date;
  saved: Boolean | null;
}

export interface NasheedError {
  name: Array<string>;
  poster: Array<string>;
  audio: Array<string>;
}

export interface NasheedsState {
  items: Array<Nasheed>;
  nasheed: Nasheed | null;
  loading: boolean;
  formErrors: NasheedError | null;
  error: string | null;
  next: string | null;
  previous: string | null;
  limit: number;
  loadedIds: Array<number>;
  loadMoreLoading: boolean;
  query: string;
}

export interface Query {
  query: string;
}
