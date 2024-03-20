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
  lyrics: string;
}

export interface Live {
  sys: {
    id: string;
  };
  title: string;
  venue: string;
  date: string;
}

export interface Release {
  sys: {
    id: string;
  };
  title: string;
  releaseType: string;
  releaseDate: string;
  songCollection: Song[]
}