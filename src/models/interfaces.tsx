export interface ContextValue {
  view: string;
  selectedArticle: Article;
}

export interface Article {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string;
  org_facet: string;
  per_facet: string;
  geo_facet: string;
  multimedia: [];
  short_url: string;
}
