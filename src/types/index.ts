export interface Book {
  id: string;
  volumeInfo: {
    previewLink: string;
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}
