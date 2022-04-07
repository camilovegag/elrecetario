export interface Recipe {
  metadata: any;
  sys: any;
  fields: RecipeFields;
}

export interface RecipeFields {
  title: string;
  slug: string;
  image: Image;
  description: string;
  ingredients: string[];
  preparation: string;
  category: string;
}

export interface Image {
  metadata: any;
  sys: any;
  fields: ImageFields;
}

export interface ImageFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}
