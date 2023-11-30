export interface ResultObject {
  copyright: string;
  response: ResponseObject;
  status: string;
}

export interface ResponseObject {
  docs: ArticleDocs[];
  meta: { hits: number; offset: number; time: number };
  status: string;
}

export type MediaItem = {
  url: string;
  caption: string | null;
  credit: string | null;
  type: string;
  height: number;
  width: number;
  rank: number;
  subType: string;
  crop_name: string;
};

export interface ArticleDocs {
  abstract: string;
  byline: { original: string };
  document_type: string;
  headline: { main: string };
  keywords: { name: string; value: string; rank: number; major: string }[];
  lead_paragraph: string;
  multimedia: MediaItem[];
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}
