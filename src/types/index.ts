export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Nasheed[];
}

export interface Nasheed {
  id: number;
  owner: string;
  name: string;
  poster: string;
  audio: string;
  created_at: Date;
  updated_at: Date;
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
}
