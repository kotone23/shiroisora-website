export interface Image {
  sys: {
    id: string;
  }
  title: string | null;
  url: URL;
}

export interface Media {
  sys: {
    id: string;
  };
  description: string;
  date: string;
}

export interface Song {
  sys: {
    id: string;
  };
  title: string;
  lyrics: string | null;
}

export interface Live {
  sys: {
    id: string;
  };
  title: string;
  venue: {
    name: string;
    url: URL | null;
  }
  date: string;
  time: string | null;
  charge: string | null;
  performers: string | null;
  description: string | null;
  setlistCollection: {
    items: Omit<Song, 'sys'>[]
  };
  encore: number | null;
  imagesCollection: {
    items: Image[]
  };
}

export interface Release {
  sys: {
    id: string;
  };
  title: string;
  releaseType: string;
  releaseDate: string;
  songCollection: {
    items: Song[]
  }
}